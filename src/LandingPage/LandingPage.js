import React, { Component } from "react";
import "./LandingPage.css";
import { withRouter } from "react-router-dom";
import ramones from "./ramones.png";

class LandingPage extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const ifExists = this.props.filterPeople();
    if (ifExists) {
      this.props.history.push(`/results/${this.props.enteredPerson}`);
    } else {
      this.props.history.push("/not-found");
    }
  };

  render() {
    return (
      <div className="page-container">
        <div className="banner">
          <div className="header ">
            <h1>DEAD OR ALIVE</h1>
          </div>
          <div className="subheader">
            <p>your corporality compendium of perishable musicians</p>
          </div>
        </div>
        <div className="image">
          <img src={ramones} alt="ramones-dead" id="dead-ramones" />
        </div>
        <div className="landing-page-container">
          <div />
          <p className="description">
            Sex, drugs and Rock'n'roll. Either one of these or a combination of
            the three all too often marks the untimely demise of a great
            musician. Some of the greats are long gone, and some are recently
            departed. With the high mortality rate that comes with the
            territory, it can be hard to keep track. Dead or Alive is here to
            tell you which of the actors in this theatrical tragedy that is the
            music business is still with us and which are jamming it up in the
            great gig in the sky. Simply enter the name of a musician below to
            see if they are alive or dead.
          </p>
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
      </div>
    );
  }
}

export default withRouter(LandingPage);
