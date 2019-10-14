import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";

import { Link } from "react-router-dom";
import PlayerCard from "./PlayerCard";
import NavBar from "./Navbar";
import Loading from "./Loading";
import LibInput from "./LibInput";
import "./Game.css";
import { Games } from "../api/pastgames";
import { Blanks } from "../api/pastgames";
import { Tracker } from "meteor/tracker";

const Game = props => {
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
  let [game_id, setGameId] = useState(props.props.g_id);

  let [reRender, setReRender] = useState(false);

  let [players, setPlayers] = useState(p);
  console.log(props.props.fll, "constructor");
  let [fill, setFills] = useState(props.props.fll);
  let [loading, setLoading] = useState(false);
  let [err, setErr] = useState({});
  let [loadingText, setLoadingText] = useState(
    "Waiting for the brave warriors who'll join you in battle"
  );
  let [submits, setSubmit] = useState(0);
  let [result, setResult] = useState("");

  const handleInputChange = (text, id) => {
    let copy = fill;
    copy[id].blank = text;

    Meteor.call("blanks.update", id, game_id, text);
  };

  useEffect(() => {
    Meteor.subscribe("games", function() {
      console.log("data ready");
      let games = Games.find({}).fetch({});
      let game = games.find(gm => {
        if (gm.code === game_id) {
          return gm;
        }
      });
      if (game !== undefined) {
        console.log("Pre-existing game");
        setFills(game.story);
      } else {
        let uno = [
          {
            id: 0,
            blank: "Person",
            text: "When my phone rang, and it was",
            order: 1
          },
          {
            id: 1,
            blank: "Noun",
            text: "telling me",
            order: 1
          },
          {
            id: 2,
            blank: "Noun",
            text:
              "had a heart attack. He didn't make it. Now it was up to me to become",
            order: 1
          },
          {
            id: 3,
            blank: "Thing",
            text: ", And put an end to this for once and for all.",
            order: 1
          }
        ];
        let dos = [
          {
            id: 0,
            blank: "Person",
            text: "To be, or not to be a ",
            order: 1
          },
          {
            id: 1,
            blank: "Noun",
            text:
              "that is the question: Whether 'tis nobler in the mind to suffer the",
            order: 1
          },
          {
            id: 2,
            blank: "Noun",
            text: "of outrageous",
            order: 1
          },
          {
            id: 3,
            blank: "Thing",
            text:
              "Or to take arms against a sea of troubles and by opposing end",
            order: 1
          }
        ];
        let tres = [
          {
            id: 0,
            blank: "Person",
            text: "As I have stated strongly before, and just to reiterate, if",
            order: 1
          },
          {
            id: 1,
            blank: "Noun",
            text: "does anything that I, in my great and unmatched",
            order: 1
          },
          {
            id: 2,
            blank: "Noun",
            text:
              "consider to be off limits, I will totally destroy and obliterate the",
            order: 1
          },
          {
            id: 3,
            blank: "Thing",
            text: "of",
            order: 1
          },
          {
            id: 4,
            blank: "Place/Person",
            text: "(I’ve done before!).",
            order: 1
          }
        ];
        let cuatro = [
          {
            id: 0,
            blank: "Person",
            text: "It was the",
            order: 1
          },
          {
            id: 1,
            blank: "Noun",
            text: "of times, it was the",
            order: 1
          },
          {
            id: 2,
            blank: "Noun",
            text: "of times, it was the age of",
            order: 1
          },
          {
            id: 3,
            blank: "Thing",
            text: "it was the age of",
            order: 1
          }
        ];
        let fills = [uno, dos, tres, cuatro];
        let randomIndex = Math.floor(Math.random() * 3);
        let _fill = fills[randomIndex];
        setFills(_fill);
        console.log("New Game");
        Meteor.call("games.insert", game_id, players, _fill);
      }
    });
    setReRender(true);
  }, []);

  const printLibText = () => {
    return fill.map(fil => {
      let _id = fil.id;
      let ct = `player-input-${_id}`;
      if (fil.order === 1) {
        Meteor.call(
          "blanks.insert",
          game_id,
          fil.id,
          fil.blank,
          fil.text,
          fil.order
        );
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
        Meteor.call(
          "blanks.insert",
          game_id,
          fil.id,
          fil.blank,
          fil.text,
          fil.order
        );
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
    Meteor.subscribe("blanks", function() {
      let f = Blanks.find({}).fetch();
      console.log(f);
      let x = "";
      f.map(fil => {
        if (fil.order === 0) {
          x = x + " " + fil.text + " " + fil.blank;
        } else {
          x = x + " " + fil.blank + " " + fil.text;
        }
      });
      setResult(x);
      setLoadingText("Waiting for everyones' input ");
      setLoading(true);
      setSubmit(submits + 1);
    });
  };

  const ReRenderCheck = () => {
    if (reRender === true) {
      console.log(reRender, "reRender");
      return printLibText();
    } else {
      return "LOADING";
    }
  };

  const returnResult = () => {
    Meteor.call("pastgames.insert", "title", game_id, result);
    return (
      <>
        <header>
          <NavBar />
        </header>

        <div className="container-fluid" id="results-container">
          <h1 id="result-h1"> Result! </h1>
          <div id="result-text">{result}</div>
          <Link to={"/"}>
            <button className="btn btn-dark" id="goback-btn">
              {" "}
              &#x2190; Go Back
            </button>
          </Link>
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
                <div id="lib-text">{ReRenderCheck()}</div>
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
  //console.log(fill);
  let codigo = window.location.pathname.split("/")[2];
  let fill = [
    {
      id: 99,
      blank: "",
      text: "Loading....",
      order: 1
    }
  ];

  return {
    props: {
      g_id: codigo,
      fll: fill
    }
  };
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
