import React, { Component } from "react";
import "./LandingPage.css";
import Form from "../Form/Form";

class LandingPage extends Component {
  state = {
    checkboxState: false
  };
  changeState = () => {
    this.setState({
      checkboxState: !this.state.checkboxState
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
          Search option currently unavailable for demonstrative purposes. Click
          submit to return living person or check below and click submit to
          return dead person
        </p>
        <p>
          <span>
            <input type="checkbox" name="checkbox" onClick={this.changeState} />
          </span>
          {!this.state.checkboxState
            ? "Return living person"
            : "Return dead person"}
        </p>
        <div className="form">
          <Form checkboxState={this.state.checkboxState} />
        </div>
      </div>
    );
  }
}

export default LandingPage;
