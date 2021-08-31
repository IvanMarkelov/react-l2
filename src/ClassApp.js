import React, { Component } from "react";
import "./App.css";

class ClassApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.handlerClick = this.handlerClick.bind(this);
  }

  handlerClick() {
      this.setState({
        counter: this.state.counter + 1,
      });
    }

  handlerMouseEnter() {
    console.log("handlerMouseEnter");
  };

  handlerMouseLeave() {
    console.log("handlerMouseLeave");
  };

  render() {
    // const handlerClick = () => {
    //   this.setState({
    //     counter: this.state.counter + 1,
    //   });
    // };

    return (
      <button
        onClick={this.handlerClick}
        onMouseEnter={this.handlerMouseEnter}
        onMouseLeave={this.handlerMouseLeave}
      >
        На меня нажали Class {this.state.counter} раз
      </button>
    );
  }
}

export default ClassApp;
