import React from "react";

function PersonInfo(props) {
  return (
    <>
      <div className="name">{props.result} is...</div>
      <div className="status_alive">
        <h1>Worm fodder</h1>
        <p className="bio_dates_alive">1940-1980</p>
      </div>
    </>
  );
}

export default PersonInfo;
