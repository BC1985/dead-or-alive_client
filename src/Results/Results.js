import React, { Component } from "react";
// import portrait from "../Images/portrait.png";
import "./Results.css";
class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="results-container">
          <div className="image-container">
            <img
              src="https://daily.jstor.org/wp-content/uploads/2019/04/should_walt_whitman_be_cancelled_1050x700.jpg"
              className="portrait"
              alt="portrait"
            />
            <div className="name">Walt Whitman</div>
          </div>
          <div className="status">
            <h1>Pushing up the daisies</h1>
            <p>May 31, 1819 - March 26,1892</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Results;
