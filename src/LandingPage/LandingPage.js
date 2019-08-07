import React from "react";
import "./LandingPage.css";
import Form from "../Form/Form";

function LandingPage() {
  return (
    <div className="landing-page-container">
      <div className="header">
        <h1>Dead or Alive</h1>
        <p>
          Enter name of famous person below to see if they are still alive or
          dead
        </p>
      </div>
      <div className="form">
        <Form />
      </div>
    </div>
  );
}

export default LandingPage;
