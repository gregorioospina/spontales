import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import AccountsUIWrapper from "./AccountsUIWrapper";
import "./JoinGame.css";

const JoinGame = props => {
  const [gamecode, setGamecode] = useState("");
  const [user, setUser] = useState(null);

  const handleChangeName = evt => {
    setGamecode(evt.target.value);
  };

  useEffect(() => {
    console.log("useEffect");
  });

  return (
    <div>
      {Meteor.user() === null ? (
        <div className="container-fluid" id="joingame-container">
          <h1 id="title">SponTales</h1>
          <form>
            <div className="form-group row">
              <div className="col" id="gamecode-input-container">
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
            <h5>
              Want to create your own SponTales?{" "}
              <a>
                <AccountsUIWrapper />
              </a>
            </h5>
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
