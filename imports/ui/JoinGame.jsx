import React from "react";
import "./JoinGame.css";

const JoinGame = () => {
  return (
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
            ></input>
          </div>
        </div>
        <button type="submit" className="btn btn-primary" id="joingame-button">
          Join Game
        </button>
      </form>
    </div>
  );
};

export default JoinGame;
