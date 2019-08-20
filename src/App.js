import React, { Component } from "react";
import LandingPage from "./LandingPage/LandingPage";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Results from "./Results/Results";
import config from "./config";
import NotFound from "./NotFound/NotFound";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
      person: "",
      filteredResult: {}
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
        people
      });
    } catch (e) {
      console.log(e);
    }
  };
  uploadNewPerson = async () => {
    const person_name = this.state.person;
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
    console.log("message:", data);
  };
  filterPeople = () => {
    const filteredResult = this.state.people.filter(person => {
      return person.person_name === this.state.person;
    });
    if (filteredResult.length === 0) {
      this.setState({
        person_name: this.state.person_name
      });
      this.uploadNewPerson();
      return false;
    }
    this.setState({ filteredResult: filteredResult[0] });
    return true;
  };
  changeHandler = e => {
    this.setState({
      person: e.target.value
    });
  };
  render() {
    console.log(this.state.person_name);
    const { person, filteredResult } = this.state;
    return (
      <div className="App">
        <Router>
          <Switch>
            <LandingPage
              exact
              path="/"
              changeHandler={this.changeHandler}
              filteredResult={filteredResult}
              person={person}
              filterPeople={this.filterPeople}
            />
            <Results path="/results" filteredResult={filteredResult} />
            <NotFound path="/not-found" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
