import React, { Component } from "react";
import "./LandingPage.css";
// import Results from "../Results/Results";
import config from "../config";

class LandingPage extends Component {
  state = {
    people: [],
    person: "",
    result: []
  };
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
      console.log(this.state.people);
    } catch (e) {
      console.log(e);
    }
  };
  filterPeople = () => {
    const filteredPerson = this.state.people.filter(person => {
      return person.person_name === this.state.person;
    });
    const person = filteredPerson[0].person_name;
    this.state.result.push(person);
    console.log(this.state.result);

    this.props.history.push("/results");
  };
  changeHandler = e => {
    this.setState({
      person: e.target.value
    });
  };
  render() {
    return (
      <div className="landing-page-container">
        <div className="header">
          <h1>Dead or Alive</h1>
          <p>
            Enter name of famous person below to see if they are still alive or
            dead.
          </p>
        </div>
        <form className="form">
          <input
            type="text"
            name="person_name"
            id="name"
            value={this.state.person}
            onChange={this.changeHandler}
          />
          <button type="submit" onClick={this.handleSubmit}>
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default LandingPage;
