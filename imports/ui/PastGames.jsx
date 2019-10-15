import React from "react";
import PropTypes from "prop-types";
import "./PastGames.css";

const PastGames = props => {
  return (
    <ul className="list-group">
      {props.pastgames.map(game => (
        <li key={game.code}>
          <a
            href="/"
            className="list-group-item d-flex justify-content-between align-items-center pastgame"//Se recomienda juntar todos los classNames en uno solo
          >
            {game.name}
            <span className="badge badge-primary badge-pill">
              {game.createdAt.getMonth() + "/" + game.createdAt.getFullYear()}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};

PastGames.propTypes = {
  pastgames: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default PastGames;
