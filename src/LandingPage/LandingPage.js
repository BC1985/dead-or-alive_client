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
        Check to return dead person
        <input type="checkbox" name="checkbox" onClick={this.changeState} />
        <div className="form">
          <Form changeState={this.changeState} />
        </div>
      </div>
    );
  }
}

export default LandingPage;
