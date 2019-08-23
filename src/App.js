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
      description: "",
      unknownPerson: "",
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
      const data = await fetch(`${config.BASE_URL}/people/`);
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
      body: JSON.stringify({
        person_name
      })
    };
    const postNewPerson = await fetch(
      "https://thawing-springs-96491.herokuapp.com/api/not_in_db",
      config
    );
    const data = await postNewPerson.json();
    //display info in UI
    let searchUrl =
      "https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=";
    let url = `${searchUrl}${person_name}`;
    const jsonPromise = fetch(url).then(r => r.json());
    jsonPromise.then(data => {
      let length = data[1].length;
      let index = Math.floor(Math.random(length));
      let desc = data[2][0];
      let title = data[1][index];
      this.setState({
        description: desc,
        unknownPerson: title
      });
    });
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
    const { enteredPerson, filteredResult, loading, description } = this.state;
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
            <NotFound
              path="/not-found"
              unknownPerson={this.state.unknownPerson}
              description={description}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
