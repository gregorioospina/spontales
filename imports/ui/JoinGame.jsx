import React, { useState } from "react";
import { Link } from "react-router-dom";
import AccountsUIWrapper from "./AccountsUIWrapper";
import "./JoinGame.css";

const JoinGame = () => {
  const [gamecode, setGamecode] = useState("");

  const handleChangeName = evt => {
    setGamecode(evt.target.value);
  };

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
              value={gamecode}
              onChange={handleChangeName}
            ></input>
            <Link to={"game" + "/" + gamecode}>
              <button className="btn btn-dark" id="joingame-button">
                Join Game
              </button>
            </Link>
          </div>
        </div>
      </form>
      <div id="login-container">
        <h5>
          Want to create your own SponTales? <AccountsUIWrapper />
        </h5>
      </div>
    </div>
  );
};

export default JoinGame;
