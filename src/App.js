import React, { Component } from "react";
import LandingPage from "./LandingPage/LandingPage";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Results_Dead from "./Results/Results-dead";
import Results_Alive from "./Results/Results-alive";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <LandingPage exact path="/" component={LandingPage} />
            <Results_Dead path="/results-dead" component={Results_Dead} />
            <Results_Alive path="/results-alive" component={Results_Dead} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
