import React from "react";
import ReactDOM from "react-dom";
import ClassApp from "./ClassApp";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
      <App />
      <ClassApp />
  </React.StrictMode>,
  document.getElementById("root")
);
