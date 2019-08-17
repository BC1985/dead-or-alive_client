import React, { Component } from "react";
import LandingPage from "./LandingPage/LandingPage";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Results from "./Results/Results";
import config from "./config";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
      person: "",
      filteredResult: []
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
  filterPeople = () => {
    const filteredPerson = this.state.people.filter(person => {
      return person.person_name === this.state.person;
    });
    const person = filteredPerson[0].person_name;
    this.state.filteredResult.push(person);
    console.log(this.state.filteredResult);
  };
  changeHandler = e => {
    this.setState({
      person: e.target.value
    });
  };
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <LandingPage
              exact
              path="/"
              changeHandler={this.changeHandler}
              person={this.state.person}
              filterPeople={this.filterPeople}
            />
            <Results
              path="/results"
              filteredResult={this.state.filteredResult}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
