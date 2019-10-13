import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import PastgamesComp from "./PastGames";
import "./Menu.css";
import { Pastgames } from "../api/pastgames";

const Menu = props => {
  const [gamecode, setGamecode] = useState("");

  const newgamecode = Math.floor(Math.random() * 5000) + 1000;

  const handleChangeName = evt => {
    setGamecode(evt.target.value);
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="container-fluid" id="menu-container">
        <h1>Welcome</h1>
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <img
                src="/create-new-game.JPG"
                className="card-img-top"
                alt="create game image"
              />
              <div className="card-body">
                <h2 className="card-title">Create Game</h2>
                <p className="card-text">
                  ¡ Create a game to play with your friends !
                </p>
                <Link to={"/game/" + newgamecode}>
                  <button className="btn btn-dark" id="creategame-button">
                    Create New Game
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Past games</h2>
                <PastgamesComp pastgames={props.pastgames} />
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <img
                src="/join-game.jpg"
                className="card-img-top"
                alt="create game image"
              />
              <div className="card-body">
                <h2 className="card-title">Join a Game</h2>
                <p className="card-text">¡Join a game already created!</p>
                <input
                  type="text"
                  className="form-control"
                  id="gamecode-input-menu"
                  placeholder="Game Code"
                  value={gamecode}
                  onChange={handleChangeName}
                ></input>
                <Link to={"/game/" + gamecode}>
                  <button className="btn btn-dark" id="joingamemenu-button">
                    Play
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Menu.propTypes = {
  pastgames: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default withTracker(() => {
  Meteor.subscribe("pastgames");
  return {
    pastgames: Pastgames.find({}).fetch()
  };
})(Menu);
