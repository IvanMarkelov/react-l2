import { Button } from "@blueprintjs/core";
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.registerMove = this.registerMove.bind(this);
  }

  state = {
    field: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ],
    player1: {
      name: "Player 1",
      mark: "X",
    },
    player2: {
      name: "Player 2",
      mark: "0",
    },
    currentPlayer: true,
    gameOver: false,
    gameWon: false,
  };

  registerMove(e) {
    console.log(e.target.parentElement.getAttribute("index"));
    console.log(e.target.getAttribute("index"));
    const row = e.target.parentElement.getAttribute("index");
    const col = e.target.getAttribute("index");
    let tempField = this.state.field;
    tempField.map((element, index) => {
      if (parseFloat(index) === parseFloat(row)) {
        if (this.state.currentPlayer) {
          element[col] = this.state.player1.mark;
        } else {
          element[col] = this.state.player2.mark;
        }
        this.setState({
          state: tempField,
        });
      }
    });
    e.target.setAttribute("disabled", true);
    this.checkGameState(row, col);
  }

  checkGameState(row, col) {
    const tempField = this.state.field;

    const rowArr = tempField[row];

    this.checkRow(row);
    //this.checkCol(col);

    //   //const sum = parseFloat(row) + parseFloat(col);

    //   if (sum === 2 || sum === 0) {
    //  //   checkDiag(row, col);
    //   }

    this.setState({
      currentPlayer: !this.state.currentPlayer,
    });
  }

  checkRow(row) {
    const rowArr = this.state.field[row];
    let rowIsCompleted = true;
    for (let index = 1; index < rowArr.length; index++) {
      if (rowArr[index - 1] !== rowArr[index]) {
        rowIsCompleted = false;
      }
    }
    this.setState({
      gameWon: rowIsCompleted,
    });
  }

  checkCol(col) {
    let colIsCompleted = true;
    for (let i = 0; i < this.state.field.length - 1; i++) {
      for (let j = 0; j < this.state.field[i].length; j++) {
        if (j === col) {
          colIsCompleted =
            this.state.field[i][j] === this.state.field[i + 1][j];
        }
      }
    }
    this.setState({
      gameWon: colIsCompleted,
    });
  }

  populateList() {
    return this.state.field.map((row, index) => {
      return (
        <div className="row" key={index} index={index}>
          {row.map((cell, index) => {
            return (
              <button
                className="cell"
                key={index}
                index={index}
                style={{
                  border: "1px solid black",
                  padding: "10px 10px",
                }}
                onClick={this.registerMove}
              >
                {cell}
              </button>
            );
          })}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h4>{this.populateList()}</h4>
      </div>
    );
  }
}

export default App;
