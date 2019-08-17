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
              "https://nationalpostcom.files.wordpress.com/2016/03/john_lennon.jpg?quality=80&strip=all&w=780"
            }
            className="portrait"
            alt="portrait"
          />
        </div>

        <PersonInfo result={props.result} />
      </div>
    </div>
  );
};

export default Results;
