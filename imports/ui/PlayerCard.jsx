import React, { useState } from "react";
import "./Game.css";

const PlayerCard = player => {
  let [playerName, setPlayerName] = useState(player.player.name);
  let [id, setId] = useState(player.player.id);

  return (
    <div className="card playercard" id={`player${id}`}>
      <div id="opacity-card">
        <img src={`/shield${id}.png`} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{playerName}</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
