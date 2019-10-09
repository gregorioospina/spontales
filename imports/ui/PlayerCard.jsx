import React from "react";
import "./Game.css";

class PlayerCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playerName: this.props.player.name,
      id: this.props.player.id
    };
  }

  render() {
    return (
      <div className="card playercard" id={`player${this.state.id}`}>
        <img
          src={`../../public/shield${this.state.id}.svg`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">{this.state.playerName}</p>
        </div>
      </div>
    );
  }
}

export default PlayerCard;
