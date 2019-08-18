import React from "react";

import "./Results.css";
const Results = props => {
  return (
    <div>
      <div className="results-container">
        <div className="image-container">
          <img
            src={`${props.image}`}
            className="portrait"
            alt={`${props.filteredResult}`}
          />
        </div>
        <div className="name">{props.filteredResult} is...</div>
        <div
          className={props.status === "alive" ? "status_alive" : "status_dead"}
        >
          <h1>{props.description}</h1>
        </div>
        <div className="dates">
          <p>{props.dates}</p>
        </div>
      </div>
    </div>
  );
};

export default Results;
