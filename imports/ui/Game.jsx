import React, { useState } from "react";
import { Link } from "react-router-dom";
import PlayerCard from "./PlayerCard";
import NavBar from "./Navbar";
import Loading from "./Loading";
import LibInput from "./LibInput";
import "./Game.css";

const Game = () => {
  let n = {
    name: "Juanito",
    id: 1
  };
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

  let [n_player, setN] = useState(n);
  let [players, setPlayers] = useState(p);
  let [fill, setFills] = useState(f);
  let [p_turn, setPTurn] = useState(1);
  let [loading, setLoading] = useState(false);
  let [loadingText, setLoadingText] = useState(
    "Waiting for the brave warriors who'll join you in battle"
  );
  let [submits, setSubmit] = useState(0);
  let [result, setResult] = useState(
    "Hola como va todo, maertin esta en villa de leyva buscando bonsais eso esta suer entretendio estoy muy feliz bla bla bla bla bla bla bla"
  );

  handleInputChange = (text, id) => {
    let copy = fill;
    copy[id].blank = text;

    setFills(copy);
  };

  printLibText = () => {
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
              inputChange={this.handleInputChange}
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
              inputChange={this.handleInputChange}
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

  combineInput = () => {
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

  returnResult = () => {
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
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={this.combineInput}
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

  returnLoading = () => {
    let clickLoading = evt => {
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

  whichReturn = () => {
    if (loading === true) {
      return returnLoading();
    } else {
      return submits >= 1 ? returnResult() : returnGame();
    }
  };

  return whichReturn();
};

export default Game;
