import React from "react";
import { NavLink } from "react-router-dom";
import headstone from "./headstone.png";
import "./Results.css";
const Results = props => {
  const {
    image,
    status,
    person_name,
    description,
    dates
  } = props.filteredResult;
  return (
    <div>
      <div className="results-container">
        <div className="image-container">
          <img src={`${image}`} className="portrait" alt={`${person_name}`} />
        </div>
        <div className="info">
          <div className="name">{person_name} is...</div>
          <div className={status === "alive" ? "status_alive" : "status_dead"}>
            <div />
            <h1>{description}</h1>
          </div>
          {status !== "alive" && (
            <div className="headstone">
              <img
                src={headstone}
                alt="headstone"
                style={{
                  width: "20%",
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
              />
            </div>
          )}
          <div className={status === "alive" ? "dates-alive" : "dates-dead"}>
            <p>{status === "alive" ? `Born ${dates}` : `${dates}`}</p>
          </div>
          <div className="button">
            <NavLink to="/">
              <button aria-label="back" role="presentation">
                Back
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
