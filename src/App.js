import { show } from "@blueprintjs/core/lib/esm/components/context-menu/contextMenu";
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    show: true,
    name: "Ivan",
  };

  changeState = () => {
    const show = this.state.show;
    this.setState({
      show: !show,
    });
  };

  render() {
    const changeStateTo = !this.state.show;
    if (this.state.show) {
      return (
        <div className="App">
          <p>Привет, {this.state.name}!</p>
          <button onClick={this.changeState}>Change State to {changeStateTo.toString()}</button>
        </div>
      );
    } else {
      return (
        <div className="App">
          <p>Пока, {this.state.name}</p>
          <button onClick={this.changeState}>Change State to {changeStateTo.toString()}</button>
        </div>
      );
    }
  }
}

export default App;
