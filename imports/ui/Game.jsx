import React, { useState } from "react";
import PropTypes from "prop-types";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";

import { Link } from "react-router-dom";
import PlayerCard from "./PlayerCard";
import NavBar from "./Navbar";
import Loading from "./Loading";
import LibInput from "./LibInput";
import "./Game.css";
import { GamesRepo } from "../api/game";

const Game = () => {
  let p = [
    {
      name: "Juanito",
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
      id: 1,
      blank: "Adjective",
      text: "Hello little boy",
      order: 1
    },
    {
      id: 2,
      blank: "Noun",
      text: "Chummy chum chum",
      order: 1
    },
    {
      id: 3,
      blank: "Place",
      text: "Wanna go?",
      order: 1
    },
    {
      id: 4,
      blank: "Noun",
      text: "Chummy chum chum",
      order: 1
    },
    {
      id: 5,
      blank: "Place",
      text: "Wanna go?",
      order: 1
    }
  ];
  let [game_id, setGameId] = useState("nill");

  let [players, setPlayers] = useState(p);
  let [fill, setFills] = useState(f);
  let [loading, setLoading] = useState(false);
  let [err, setErr] = useState({});
  let [loadingText, setLoadingText] = useState(
    "Waiting for the brave warriors who'll join you in battle"
  );
  let [submits, setSubmit] = useState(0);
  let [result, setResult] = useState(
    "Hola como va todo, maertin esta en villa de leyva buscando bonsais eso esta suer entretendio estoy muy feliz bla bla bla bla bla bla bla"
  );

  const handleInputChange = (text, id) => {
    let copy = fill;
    copy[id].blank = text;

    setFills(copy);
  };

  const printLibText = () => {
    return fill.map(fil => {
      let _id = fil.id;
      let ct = `player-input-${_id}`;
      if (fil.order === 0) {
        return (
          <>
            <a> {fil.text} </a>
            <LibInput
              classType={ct}
              placeholder={fil.blank}
              id={_id}
              inputChange={handleInputChange}
            />
          </>
        );
      } else {
        return (
          <>
            <LibInput
              classType={ct}
              placeholder={fil.blank}
              id={_id}
              inputChange={handleInputChange}
            />
            <a> {fil.text} </a>
          </>
        );
      }
    });
  };

  const showRivals = () => {
    return players.map(player => {
      return <PlayerCard player={player} />;
    });
  };

  const combineInput = () => {
    let x = "";
    console.log("fill en combine Input");
    console.log(fill);
    fill.map(fil => {
      if (fil.order === 0) {
        x = x + " " + fil.text + " " + fil.blank;
      } else {
        x = x + " " + fil.blank + " " + fil.text;
      }
    });
    console.log("x");
    console.log(x);
    setResult(x);
    setLoadingText("Waiting for everyones' input ");
    setLoading(true);
    setSubmit(submits + 1);
  };

  const returnResult = () => {
    Meteor.call("pastgames.insert", "title", 15264, result);
    return (
      <>
        <header>
          <NavBar />
        </header>

        <div className="container" id="results-container">
          <div className="result-banner">
            <h1 id="result-h1"> Result! </h1>
          </div>
          <div className="">
            <div id="text-container-results">
              <div id="result-text">{result}</div>
              <div id="lil-margin">
                <Link to={"/game"}>
                  <button className="btn btn-dark btn-gob">
                    {" "}
                    &#x2190; GO BACK
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const returnGame = () => {
    return (
      <>
        <header>
          <NavBar />
        </header>

        <div className="container">
          <div className="row">
            <div className="col-3" id="rivals-column">
              <label htmlFor="rivals-box"> Players: </label>
              {showRivals()}
            </div>
            <div className="col-9">
              <div id="text-container">
                <div id="lib-text">{printLibText()}</div>
              </div>
              <div id="button-submit">
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={combineInput}
                  id="submitgame-btn"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const returnLoading = () => {
    let clickLoading = () => {
      setLoading(false);
    };
    return (
      <>
        <Loading textisimo={loadingText} />
        <button type="button" onClick={clickLoading}>
          Button
        </button>
      </>
    );
  };

  const whichReturn = () => {
    if (loading === true) {
      return returnLoading();
    } else {
      return submits >= 1 ? returnResult() : returnGame();
    }
  };

  return whichReturn();
};

let LoadGame = withTracker(() => {
  Meteor.subscribe("games_repo");
  //const game = GamesRepo.find({}).fetch();
  const game = [];
  console.log(game);
  let randomIndex = Math.floor(Math.random() * game.length);
  let element = game[randomIndex];
  /*let fll = element.fill; */
  let fill = [
    {
      id: 1,
      blank: "Adjective",
      text: "Hello little boy",
      order: 1
    },
    {
      id: 2,
      blank: "Noun",
      text: "Chummy chum chum",
      order: 1
    },
    {
      id: 3,
      blank: "Place",
      text: "Wanna go?",
      order: 1
    },
    {
      id: 4,
      blank: "Noun",
      text: "Chummy chum chum",
      order: 1
    },
    {
      id: 5,
      blank: "Place",
      text: "Wanna go?",
      order: 1
    }
  ];
  return { fill: fill };
})(Game);

Game.defaultProps = {
  game_id: "GM000",
  players: [
    {
      name: "Waiting",
      id: 1
    }
  ]
};

Game.propTypes = {
  players: PropTypes.array,
  fill: PropTypes.array,
  game_id: PropTypes.string
};

export default LoadGame;
