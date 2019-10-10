import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/menu">
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

      <main className="container-fluid" id="menu-container">
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
                  <li className="list-group-item">Juego 1</li>
                  <li className="list-group-item">Juego 2</li>
                  <li className="list-group-item">Juego 3</li>
                  <li className="list-group-item">Juego 4</li>
                  <li className="list-group-item">Juego 5</li>
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
      </main>
    </div>
  );
};

export default Menu;
