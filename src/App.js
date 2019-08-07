import React from "react";
import LandingPage from "./LandingPage/LandingPage";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Results from "./Results/Results";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <LandingPage exact path="/" component={LandingPage} />
          <Results path="/results" component={Results} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
