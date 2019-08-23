import React, { Component } from "react";
import LandingPage from "./LandingPage/LandingPage";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Results from "./Results/Results";
import config from "./config";
import NotFound from "./NotFound/NotFound";
import Spinner from "./Spinner/Spinner";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
      enteredPerson: "",
      filteredResult: {},
      loading: true
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.filterPeople();
  };
  componentDidMount() {
    this.fetchPeople();
  }
  fetchPeople = async () => {
    try {
      const data = await fetch(`${config.API_ENDPOINT}/people/`);
      const people = await data.json();
      this.setState({
        people,
        loading: false
      });
    } catch (e) {
      console.log(e);
    }
  };
  uploadNewPerson = async () => {
    const person_name = this.state.enteredPerson;
    const config = {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ person_name })
    };

    const postNewPerson = await fetch(
      "http://localhost:8000/api/not_in_db",
      config
    );

    const data = await postNewPerson.json();
    return data;
  };
  filterPeople = () => {
    const filteredResult = this.state.people.filter(person => {
      return (
        person.person_name.toLowerCase() ===
        this.state.enteredPerson.toLowerCase()
      );
    });
    if (filteredResult.length === 0) {
      this.setState({
        person_name: this.state.enteredPerson
      });
      this.uploadNewPerson();
      return false;
    }
    this.setState({ filteredResult: filteredResult[0], enteredPerson: "" });
    return true;
  };
  changeHandler = e => {
    this.setState({
      enteredPerson: e.target.value
    });
  };
  render() {
    const { enteredPerson, filteredResult, loading } = this.state;
    return (
      <div className="App">
        <Router>
          <Switch>
            {loading ? (
              <Spinner />
            ) : (
              <LandingPage
                exact
                path="/"
                changeHandler={this.changeHandler}
                filteredResult={filteredResult}
                enteredPerson={enteredPerson}
                filterPeople={this.filterPeople}
                loading={loading}
              />
            )}
            <Results path="/results" filteredResult={filteredResult} />
            <NotFound path="/not-found" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
