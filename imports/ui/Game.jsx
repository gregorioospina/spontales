import React, { useState } from "react";
import { Link } from "react-router-dom";
import PlayerCard from "./PlayerCard";
import "./Game.css";

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.printLibText = this.printLibText.bind(this);
    this.showRivals = this.showRivals.bind(this);

    this.state = {
      n_player: {
        name: "Juan",
        id: 1
      },
      players: [
        {
          name: "Juan",
          id: 1
        },
        {
          name: "Grego",
          id: 2
        },
        {
          name: "Sergio",
          id: 3
        },
        {
          name: "John",
          id: 4
        }
      ],
      fill: [
        {
          id: 2,
          blank: "Adjective",
          text: "Hello little boy",
          order: 1
        },
        {
          id: 3,
          blank: "Noun",
          text: "Chummy chum chum",
          order: 1
        },
        {
          id: 4,
          blank: "Place",
          text: "Wanna go?",
          order: 1
        },
        {
          id: 1,
          blank: "Adjective",
          text: "Thats nice",
          order: 1
        }
      ]
    };
  }

  printLibText() {
    return this.state.fill.map(fil => {
      let ct = `player-input-${fil.id}`;
      if (fil.order === 0) {
        return (
          <>
            <a>{fil.text}</a>
            <LibInput classType={ct} placeholder={fil.blank} />
          </>
        );
      } else {
        return (
          <>
            <LibInput
              classType={`player-input-${fil.id}`}
              placeholder={fil.blank}
            />
            <a>{fil.text}</a>
          </>
        );
      }
    });
  }

  showRivals = () => {
    return this.state.players.map(player => {
      return (
        <div className="col-3">
          <PlayerCard player={player} />
        </div>
      );
    });
  };

  render() {
    return (
      <>
        <header>
          <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
              <img
                src="/knight.png"
                className="d-inline-block"
                alt="logo"
                id="logo"
              />
              SponTales
            </a>
            <form className="form-inline">
              <button className="btn btn-outline-primary" id="logout-button">
                Log Out
              </button>
            </form>
          </nav>
        </header>

        <div className="container">
          <div className="row">
            <div className="col-3">
              <GameNavMenu player={this.state.n_player} />
            </div>
            <div className="col-9">
              <div id="text-container">
                <div id="lib-text">{this.printLibText()}</div>
                <label htmlFor="rivals-box"> Playing Against: </label>
                <div id="rivals-box" className="row">
                  {this.showRivals()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const LibInput = (classType, placeholder) => {
  console.log(classType);
  return (
    <input
      type="text"
      className={classType.classType}
      placeholder={placeholder.placeholder}
    />
  );
};

const GameNavMenu = player => {
  let shield = "shield" + player.player.id;
  return (
    <div className="row">
      <img
        src={`..\\..\\public\\${shield}.svg`}
        alt="shield"
        className="shield-img"
      />
      <h4 id="playername">{player.player.name}</h4>
      <div className="sk-folding-cube">
        <div className="sk-cube1 sk-cube"></div>
        <div className="sk-cube2 sk-cube"></div>
        <div className="sk-cube4 sk-cube"></div>
        <div className="sk-cube3 sk-cube"></div>
      </div>
    </div>
  );
};

export default Game;
