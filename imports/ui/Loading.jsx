import React, { useState } from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="container" id="joingame-container">
      <div>
        <h2> Waiting for all the brave warriors to join battle </h2>
      </div>
      <div className="spinner">
        <div className="dot1"></div>
        <div className="dot2"></div>
      </div>
    </div>
  );
};

export default Loading;
