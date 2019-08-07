import React from "react";
import LandingPage from "./LandingPage/LandingPage";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Results from "./Results/Results-dead";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <LandingPage exact path="/" component={LandingPage} />
          <Results path="/results-dead" component={Results} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
