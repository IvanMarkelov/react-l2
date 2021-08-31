import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ClassApp from "./ClassApp";
import FunctionalApp from "./FunctionalApp";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <FunctionalApp />
    <ClassApp />
  </React.StrictMode>,
  document.getElementById("root")
);
