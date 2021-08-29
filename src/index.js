import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function tick() {
  const element = (
    <div>
      <h2>Time is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById("root"));
}

tick();
setInterval(tick, 30000);
