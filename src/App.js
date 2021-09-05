import { Button } from "@blueprintjs/core";
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.registerMove = this.registerMove.bind(this);
    this.state = {
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
      showNewGameButton: false,
      isFieldBlocked: false,
    };
  }

  registerMove(e) {
    const row = e.target.parentElement.getAttribute("index");
    const col = e.target.getAttribute("index");
    e.target.setAttribute("disabled", true);

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
    let movesMade = this.state.cellsFilled + 1;
    this.setState({
      cellsFilled: movesMade,
    });
    this.checkGameState(row, col, movesMade);
  }

  checkGameState = (row, col, movesMade) => {
    let isGameWon = this.state.gameWon;
    const sum = parseFloat(row) + parseFloat(col);

    if (movesMade >= 5) {
      if (!isGameWon) {
        isGameWon = this.checkRow(row);
      }
      if (!isGameWon) {
        isGameWon = this.checkCol(col);
      }
      if (!isGameWon && (sum === 2 || sum === 0)) {
        isGameWon = this.checkDiag(row, col);
      }
    }

    this.calculateResults(isGameWon, movesMade);
  };

  calculateResults(isGameWon, movesMade) {
    let isGameOver = false;
    if (isGameWon || movesMade >= 9) {
      isGameOver = true;
    }

    if (isGameOver) {
      let winner;
      if (isGameWon) {
        winner = this.state.currentPlayer
          ? this.state.player1.name
          : this.state.player2.name;
      } else {
        winner = "It's a draw";
      }
      this.setState({
        gameOver: isGameOver,
        gameWon: isGameWon,
        winner,
        showNewGameButton: true,
        isFieldBlocked: true,
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
    return rowIsCompleted;
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
    return colIsCompleted;
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
    return diagIsCompleted;
  }

  populateList() {
    return this.state.field.map((row, index) => {
      return (
        <div
          className="row"
          style={{ display: "flex", alignContent: "center" }}
          key={index}
          index={index}
        >
          {row.map((cell, index) => {
            return (
              <button
                className="cell"
                key={index}
                index={index}
                disabled={this.state.isFieldBlocked}
                style={{
                  minWidth: "40px",
                  minHeight: "40px",
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

  blockField = () => {
    this.setState({
      isFieldBlocked: true,
    });
  };

  startNewGame = () => {
    let tempField = this.clearField();
    this.setState({
      field: tempField,
      currentPlayer: true,
      gameOver: false,
      gameWon: false,
      winner: "No winner yet",
      cellsFilled: 0,
      showNewGameButton: false,
      isFieldBlocked: false,
    });
  };

  clearField() {
    let tempField = this.state.field;
    for (let i = 0; i < tempField.length; i++) {
      for (let j = 0; j < tempField[i].length; j++) {
        tempField[i][j] = "";
      }
    }
    return tempField;
  }

  render() {
    console.log(this.state);
    return (
      <div style={{ position: "absolute", left: "50%" }}>
        <h4>{this.populateList()}</h4>
        {this.state.showNewGameButton && (
          <button onClick={this.startNewGame}>Start New Game</button>
        )}
        {this.state.gameOver && <h4>And the winner is: {this.state.winner}</h4>}
      </div>
    );
  }
}

export default App;
