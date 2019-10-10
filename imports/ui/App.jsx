import React from "react";
import JoinGame from "./JoinGame";
import Menu from "./Menu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => (
  <Router>
    <div id="content-container">
      <Switch>
        <Route path="/" exact component={JoinGame} />
        <Route path="/menu" component={Menu} />
      </Switch>
    </div>
  </Router>
);

export default App;
