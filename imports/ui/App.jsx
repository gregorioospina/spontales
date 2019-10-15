import React from "react";
import JoinGame from "./JoinGame";
import Game from "./Game";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Se recomienda modularizar mejor los archivos. 
const App = () => (
  <Router>
    <div id="content-container">
      <Switch>
        <Route path="/" exact component={JoinGame} />
        <Route path="/game/:code" component={Game} />
      </Switch>
    </div>
  </Router>
);

export default App;
