import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };

    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement() {
    this.setState({
      count: this.state.count - 1
    })
  }

  reset() {
    this.setState({
      count: 0
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.decrement}>decrement</button>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.reset}>reset</button>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}

export default App;