import React, { useState } from "react";

const Loading = () => {
  return (
    <div className="container">
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
