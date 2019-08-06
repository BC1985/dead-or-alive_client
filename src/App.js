import React from "react";
import LandingPage from "./LandingPage/LandingPage";
import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <LandingPage />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
