import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    languages: ["html", "css", "js", "php"],
  };

  populateList() {
    return this.state.languages.map((language) => {
      return <li>{language}</li>;
    });
  }

  render() {
    return <ul>
      {
        this.populateList()
      }
    </ul>

  }
}

export default App;
