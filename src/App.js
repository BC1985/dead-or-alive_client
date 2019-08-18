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
      filteredResult: "",
      status: "",
      dates: "",
      description: "",
      image: ""
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
    const {
      person_name,
      dates,
      description,
      status,
      image
    } = filteredPerson[0];
    const person = person_name;
    const personBio = dates;
    const desc = description;
    const img = image;
    const doa = status;
    this.setState({
      filteredResult: person,
      dates: personBio,
      description: desc,
      image: img,
      status: doa
    });
  };
  changeHandler = e => {
    this.setState({
      person: e.target.value
    });
  };
  render() {
    const {
      person,
      filteredResult,
      dates,
      description,
      image,
      status
    } = this.state;
    return (
      <div className="App">
        <Router>
          <Switch>
            <LandingPage
              exact
              path="/"
              changeHandler={this.changeHandler}
              person={person}
              filterPeople={this.filterPeople}
            />
            <Results
              path="/results"
              filteredResult={filteredResult}
              dates={dates}
              description={description}
              image={image}
              status={status}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
