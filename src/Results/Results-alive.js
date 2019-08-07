import React, { Component } from "react";
import Form from "../Form/Form";
import "./Results.css";
class Results extends Component {
  render() {
    return (
      <div>
        <div className="results-container">
          <div className="image-container">
            <img
              src={
                "https://i2-prod.mirror.co.uk/incoming/article12776629.ece/ALTERNATES/s615/rexfeatures_47459a.jpg"
              }
              className="portrait"
              alt="portrait"
            />
            <div className="name">Elton John is...</div>
          </div>
          <div className="status_alive">
            <h1>Alive and kickin'</h1>
            <p className="bio_dates_alive">Born March 25, 1947</p>
          </div>
          <Form />
        </div>
      </div>
    );
  }
}

export default Results;
