import React, { useState } from "react";
import "./Game.css";

const PlayerCard = player => {
  console.log(player, "player");
  let [playerName, setPlayerName] = useState(player.player.name);
  let [id, setId] = useState(player.player.id);

  return (
    <div className="card playercard" id={`player${id}`}>
      <div className="opacity-card">
        <div className="row">
          <img
            src={`/shield${id}.png`}
            className="card-img-top shield-img"
            alt="..."
          />
          <div className="card-body card-body-chechonomemate">
            <p className="card-text">{playerName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
