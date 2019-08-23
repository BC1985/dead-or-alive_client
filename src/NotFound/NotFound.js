import React, { Component } from "react";
import { generateRandomFact } from "../Utils/randomFact";
import { NavLink } from "react-router-dom";
import error from "./error.png";
import "./NotFound.css";
class NotFound extends Component {
  render() {
    let { unknownPerson, description } = this.props;
    return (
      <div className="not-found-container">
        <h1>Uh oh...</h1>
        <div className="error-graphic">
          <img src={error} alt="404 error" id="error-graphic" />
        </div>
        <p style={{ textAlign: "left" }}>
          {unknownPerson} is unavailable. The name has been submitted, and their
          information will be uploaded soon. Here is what I can tell you in the
          meantime: {description} <br />
          And now, here is an interesting music fact...
        </p>
        <div className="fact-card">{generateRandomFact()}</div>
        <NavLink to="/">
          <button>Back</button>
        </NavLink>
      </div>
    );
  }
}

export default NotFound;
