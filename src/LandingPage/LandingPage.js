import React, { Component } from "react";
import "./LandingPage.css";
// import Results from "../Results/Results";
import { withRouter } from "react-router-dom";

class LandingPage extends Component {
  handleSubmit = e => {
    e.preventDefault();
    // const nonExistant = !this.props.filteredResult;
    // const enteredName = this.props.person;
    // if (nonExistant) {
    //   this.state.notFound.push(enteredName);
    // }
    this.props.filterPeople();
    this.props.history.push(`/results/${this.props.person}`);
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
            value={this.props.person}
            onChange={this.props.changeHandler}
          />
          <button type="submit" onClick={this.handleSubmit}>
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(LandingPage);
