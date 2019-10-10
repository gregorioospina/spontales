import React from "react";
import JoinGame from "./JoinGame";
import Menu from "./Menu";
import Game from "./Game";
import Lobby from "./Lobby";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => (
  <Router>
    <div id="content-container">
      <Switch>
        <Route path="/" exact component={Lobby} />
        <Route path="/join" exact component={JoinGame} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/gamenew" exact component={Game} />
      </Switch>
    </div>
  </Router>
);

export default App;
