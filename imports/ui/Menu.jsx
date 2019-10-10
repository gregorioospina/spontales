import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Menu.css";

const Menu = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="container-fluid" id="menu-container">
        <h1>Welcome</h1>
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <img
                src="/create-new-game.JPG"
                className="card-img-top"
                alt="create game image"
              />
              <div className="card-body">
                <h2 className="card-title">Create Game</h2>
                <p className="card-text">
                  ¡ Create a game to play with your friends !
                </p>
                <Link to={"/gamenew"}>
                  <button className="btn btn-dark" id="creategame-button">
                    Create New Game
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Past games</h2>
                <ul className="list-group">
                  <li>
                    <a
                      href="/"
                      className="list-group-item d-flex justify-content-between align-items-center pastgame"
                    >
                      Laundry
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="list-group-item d-flex justify-content-between align-items-center pastgame"
                    >
                      Laundry
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="list-group-item d-flex justify-content-between align-items-center pastgame"
                    >
                      Laundry
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <img
                src="/join-game.jpg"
                className="card-img-top"
                alt="create game image"
              />
              <div className="card-body">
                <h2 className="card-title">Join a Game</h2>
                <p className="card-text">¡Join a game already created!</p>
                <input
                  type="text"
                  className="form-control"
                  id="gamecode-input-menu"
                  placeholder="Game Code"
                ></input>
                <Link to={"/gamenew"}>
                  <button className="btn btn-dark" id="joingamemenu-button">
                    Play
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
