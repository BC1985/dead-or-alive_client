import React from "react";

import "./Results.css";
const Results = props => {
  return (
    <div>
      <div className="results-container">
        <div className="image-container">
          <img
            src={
              "https://nationalpostcom.files.wordpress.com/2016/03/john_lennon.jpg?quality=80&strip=all&w=780"
            }
            className="portrait"
            alt="portrait"
          />
        </div>
        <div className="name">{props.filteredResult} is...</div>
        <div className="status_alive">
          <h1>Worm fodder</h1>
          <p className="bio_dates_alive">1940-1980</p>
        </div>
      </div>
    </div>
  );
};

export default Results;
