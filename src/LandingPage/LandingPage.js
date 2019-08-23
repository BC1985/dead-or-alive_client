import React, { Component } from "react";
import "./LandingPage.css";
import { withRouter } from "react-router-dom";

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
      <div className="landing-page-container">
        <div className="header font-effect-decaying">
          <h1>DEAD OR ALIVE</h1>
          <div className="subheader">
            <p>your corporality compendium of perishable musicians</p>
          </div>
        </div>
        <p className="description">
          Sex, drugs and Rock'n'roll. Either one of these or a combination of
          the three all too often marks the untimely demise of a great musician.
          Some of the greats are long gone, and some are recently departed. With
          the high mortality rate that comes with the territory, it can be hard
          to keep track. Dead or Alive is here to tell you which of the actors
          in this theatrical tragedy that is the music business is still with us
          and which are jamming it up in the great gig in the sky. Simply enter
          the name of a musician below to see if they are alive or dead.
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
    );
  }
}

export default withRouter(LandingPage);
