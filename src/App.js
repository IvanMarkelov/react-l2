import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    nums: [1, 3, 5, 11, 53, 4, 100],
  };

  populateList() {
    return this.state.nums.map((num) => {
      return (
        <span
          key={num}
          style={{
            border: "3px solid black",
            margin: "10px 10px",
            padding: "10px 10px",
          }}
        >
          {parseFloat(num) + 3}
        </span>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>{this.state.nums.join(", ")}</h3>
        <h4>{this.populateList()}</h4>
      </div>
    );
  }
}

export default App;
