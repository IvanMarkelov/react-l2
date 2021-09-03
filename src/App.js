import { Button } from "@blueprintjs/core";
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.registerMove = this.registerMove.bind(this);
    this.checkGameState = this.checkGameState.bind(this);
    this.calculateResults = this.calculateResults.bind(this);
    this.checkRow = this.checkRow.bind(this);
    this.checkCol = this.checkCol.bind(this);
    this.checkDiag = this.checkDiag.bind(this);
    this.populateList = this.populateList.bind(this);
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
    winner: "No winner yet",
    cellsFilled: 0,
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
    this.checkCol(col);

    const sum = parseFloat(row) + parseFloat(col);

    if (sum === 2 || sum === 0) {
      this.checkDiag(row, col);
    }

    this.setState({
      cellsFilled: this.state.cellsFilled + 1,
    });

    this.calculateResults();
  }

  calculateResults() {
    console.log(this.state.gameWon);

    if (this.state.gameWon) {
      const winner = this.state.currentPlayer
        ? this.state.player1.name
        : this.state.player2.name;
      this.setState({
        gameOver: true,
        winner,
      });
    } else if (!this.state.gameWon && this.state.cellsFilled == 9) {
      this.setState({
        gameOver: true,
        winner: "Draw",
      });
    } else {
      this.setState({
        currentPlayer: !this.state.currentPlayer,
      });
    }
  }

  checkRow(row) {
    const rowArr = this.state.field[row];
    let rowIsCompleted = true;
    for (let index = 1; index < rowArr.length; index++) {
      if (rowArr[index - 1] !== rowArr[index]) {
        rowIsCompleted = false;
      }
    }
    if (rowIsCompleted) {
      this.setState({
        gameWon: rowIsCompleted,
      });
    }
  }

  checkCol(col) {
    const tempField = this.state.field;
    let colIsCompleted = true;
    for (let i = 1; i < tempField.length; i++) {
      for (let j = 0; j < tempField[i].length; j++) {
        if (parseFloat(j) === parseFloat(col)) {
          if (tempField[i - 1][j] !== tempField[i][j]) {
            colIsCompleted = false;
          }
        }
      }
    }
    if (colIsCompleted) {
      this.setState({
        gameWon: colIsCompleted,
      });
    }
  }

  checkDiag(row, col) {
    const tempField = this.state.field;
    let diagIsCompleted = false;
    if (
      (tempField[row][col] === tempField[1][1] &&
        tempField[row][col] === tempField[2][2] &&
        tempField[row][col] === tempField[0][0]) ||
      (tempField[row][col] === tempField[1][1] &&
        tempField[row][col] === tempField[0][2] &&
        tempField[row][col] === tempField[2][0])
    ) {
      diagIsCompleted = true;
    }
    if (diagIsCompleted) {
      this.setState({
        gameWon: diagIsCompleted,
      });
    }
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
