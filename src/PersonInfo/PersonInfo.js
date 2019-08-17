import React from "react";

function PersonInfo(props) {
  return (
    <>
      <div className="name">{props.person} is...</div>
      <div className="status_alive">
        <h1>Alive and kickin'</h1>
        <p className="bio_dates_alive">Born March 25, 1947</p>
      </div>
    </>
  );
}

export default PersonInfo;
