import React from "react";

function LandingPage() {
  return (
    <div classNam="container">
      <div className="header">
        <h1>Dead or Alive</h1>
        <p>
          Enter name of famous person below to see if they are still alive or
          dead
        </p>
      </div>
      <div className="form">
        <form className="landing-page-form">
          <input
            type="text"
            placeholder="Shirley Bassey"
            name="name-input"
            id="name-input"
          />
        </form>
      </div>
    </div>
  );
}

export default LandingPage;
