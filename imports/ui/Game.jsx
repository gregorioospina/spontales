import React, { useState } from "react";
import { Link } from "react-router-dom";
import PlayerCard from "./PlayerCard";
import NavBar from "./Navbar";
import Loading from "./Loading";
import "./Game.css";
import "./Animations.css";

const Game = () => {
  let n = {
    name: "Juanito",
    id: 1
  };
  let p = [
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
  ];
  let f = [
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
  ];

  let [n_player, setN] = useState(n);
  let [players, setPlayers] = useState(p);
  let [fill, setFills] = useState(f);
  let [p_turn, setPTurn] = useState(1);
  let [loading, setLoading] = useState(true);

  printLibText = () => {
    return fill.map(fil => {
      let ct = `player-input-${fil.id}`;
      if (fil.order === 0) {
        return (
          <>
            <a> {fil.text} </a>
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
            <a> {fil.text} </a>
          </>
        );
      }
    });
  };

  showRivals = () => {
    return players.map(player => {
      return <PlayerCard player={player} />;
    });
  };

  returnGame = () => {
    return (
      <>
        <header>
          <NavBar />
        </header>

        <div className="container">
          <div className="row">
            <div className="col-3" id="rivals-column">
              <label htmlFor="rivals-box"> Players: </label>
              {this.showRivals()}
            </div>
            <div className="col-9">
              <div id="text-container">
                <div id="lib-text">{this.printLibText()}</div>
              </div>
              <div id="button-submit">
                <button type="button" className="btn btn-warning">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  returnLoading = () => {
    let clickLoading = evt => {
      setLoading(false);
    };
    return (
      <>
        <Loading />
        <button type="button" onClick={clickLoading}>
          Button
        </button>
      </>
    );
  };

  whichReturn = () => {
    if (loading === true) {
      return returnLoading();
    } else {
      return returnGame();
    }
  };

  return whichReturn();
};

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
      <img src={`/${shield}.png`} alt="shield" className="shield-img" />
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
