import React from "react";
import "./Game.css";

const PlayerCard = player => {
  console.log(player, "player");
  let playerName = player.player.name;
  let id = player.player.id;

  return (
    <div className="card playercard" id={`player${id}`} key={id}>
      <div className="opacity-card">
        <div className="row">
          <img
            src={`/shield${id}.png`}
            className="card-img-top shield-img"
            alt="..."//Se recomienda poner un alt mas descriptivo
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
