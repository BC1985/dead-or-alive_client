import React, { Component } from "react";
import LandingPage from "./LandingPage/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ResultsDead from "./Results/Results-dead";
import ResultsAlive from "./Results/Results-alive";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <ResultsDead path="/results-dead" component={ResultsDead} />
            <ResultsAlive path="/results-alive" component={ResultsAlive} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
