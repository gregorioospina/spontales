import React, { useState } from "react";
import PropTypes from "prop-types";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import AccountsUIWrapper from "./AccountsUIWrapper";
import "./JoinGame.css";

const JoinGame = () => {
  const [gamecode, setGamecode] = useState("");

  const handleChangeName = evt => {
    setGamecode(evt.target.value);
  };

  return (
    <div role="main">
      {Meteor.user() === null ? (
        <div className="container-fluid" id="joingame-container">
          <h1 id="title">SponTales</h1>
          <form>
            <div className="form-group row">
              <div className="col" id="gamecode-input-container">
                <label htmlFor="gamecode-input"></label>
                <input
                  type="text"
                  className="form-control"
                  id="gamecode-input"
                  placeholder="Game Code"
                  value={gamecode}
                  onChange={handleChangeName}
                ></input>
                <Link to={"/gamenew"}>
                  <button className="btn btn-dark" id="joingame-button">
                    Join Game
                  </button>
                </Link>
              </div>
            </div>
          </form>
          <div id="login-container">
            <h2 id="login-text">
              Want to create your own SponTales?{" "}
              <a>
                <AccountsUIWrapper />
              </a>
            </h2>
          </div>
        </div>
      ) : (
        <Menu />
      )}
    </div>
  );
};

JoinGame.propTypes = {
  user: PropTypes.object
};

export default withTracker(() => ({
  user: Meteor.user()
}))(JoinGame);
