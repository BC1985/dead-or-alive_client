import React, { Component } from "react";
import "./LandingPage.css";
import { withRouter } from "react-router-dom";

class LandingPage extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const ifExists = this.props.filterPeople();
    if (ifExists) {
      this.props.history.push(`/results/${this.props.person}`);
    } else {
      this.props.history.push("/not-found");
    }
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
            value={this.props.enteredPerson}
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
