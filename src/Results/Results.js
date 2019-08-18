import React from "react";
import { NavLink } from "react-router-dom";
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
          <div />
          <h1>{props.description}</h1>
        </div>
        {props.status !== "alive" && (
          <div className="headstone">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjGlKmax4UKVFJc5JYFBOWC5Q6vgrbq8WSwcOnX-b2vwOQDT7l"
              alt="headstone"
              style={{ width: "20%", marginLeft: "auto", marginRight: "auto" }}
            />
          </div>
        )}
        <div className="dates">
          <p>
            {props.status === "alive"
              ? `Born ${props.dates}`
              : `${props.dates}`}
          </p>
        </div>
        <div className="button">
          <NavLink to="/">
            <button>Back</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Results;
