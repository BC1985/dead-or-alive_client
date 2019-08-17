import React from "react";
import PersonInfo from "../PersonInfo/PersonInfo";

import "./Results.css";
const Results = props => {
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
        </div>

        <PersonInfo person={props.person} />
      </div>
    </div>
  );
};

export default Results;
