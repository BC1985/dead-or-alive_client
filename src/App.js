import React, { Component } from "react";
import LandingPage from "./LandingPage/LandingPage";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Results from "./Results/Results-dead";

class App extends Component {
  render() {
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
}

export default App;
