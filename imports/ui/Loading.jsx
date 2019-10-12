import React from "react";
import "./Loading.css";

const Loading = textisimo => {
  console.log(textisimo);
  return (
    <div className="container" id="loading-container">
      <div>
        <h1 id="loading-text">{textisimo.textisimo}</h1>
      </div>
      <div className="spinner">
        <div className="dot1"></div>
        <div className="dot2"></div>
      </div>
    </div>
  );
};

export default Loading;
