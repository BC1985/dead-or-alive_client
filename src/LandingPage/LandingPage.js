import React, { Component } from "react";
import "./LandingPage.css";
import Form from "../Form/Form";

class LandingPage extends Component {
  state = {
    alive: true
  };
  changeState = () => {
    this.setState({
      alive: false
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
        <p>
          Search option currently unavailable for demonstrative purposes. Check
          to return dead person
          <span>
            <input type="checkbox" name="checkbox" onClick={this.changeState} />
          </span>
        </p>
        <div className="form">
          <Form alive={this.state.alive} />
        </div>
      </div>
    );
  }
}

export default LandingPage;
