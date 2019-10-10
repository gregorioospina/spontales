import React from "react";
import { Meteor } from "meteor/meteor";
import JoinGame from "./JoinGame";
import Menu from "./Menu";

const Lobby = () => (
  <div>
    <div>{Meteor.user() === null ? <JoinGame /> : <Menu />}</div>
  </div>
);

export default Lobby;
