import React from "react";
import JoinGame from "./JoinGame";
import Game from "./Game";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => (
  <Router>
    <div id="content-container">
      <Switch>
        <Route path="/" exact component={JoinGame} />
        <Route path="/game/:id" component={Game} />
      </Switch>
    </div>
  </Router>
);

export default App;
