import React from "react";
import "./App.css";
import ArticleComponent from "./components/ArticleComponent";
import FootComponent from "./components/FootComponent";
import HeadComponent from "./components/HeadComponent";
import NavComponent from "./components/NavComponent";

function App() {

  return (
    <div className="App">
      <NavComponent />
      <HeadComponent />
      <ArticleComponent />
      <FootComponent />
    </div>
  );
}

export default App;
