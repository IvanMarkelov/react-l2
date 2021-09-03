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
    this.checkCol(col);

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
    console.log("game is won? " + colIsCompleted);
    this.setState({
      gameWon: colIsCompleted,
    });
  }
  //   checkCol = (col) => {
  //     console.log("Field Row amount: " + field.length);
  //     console.log("Field column amount: " + field[0].length);
  //     console.log("Item value: " + field[0][0]);
  //     let colIsCompleted = true;
  //     for (let i = 0; i < field.length - 1; i++) {
  //       for (let j = 0; j < field[i].length; j++) {
  //         if (j === col) {
  //           console.log("j = col");
  //           console.log("i" + field[i][j]);
  //           console.log("i+1" + field[i + 1][j]);
  //           console.log(field[i][j] === field[i + 1][j]);
  //           console.log(
  //             "colIsComp" + (colIsCompleted = field[i][j] === field[i + 1][j])
  //           );
  //           colIsCompleted = field[i][j] === field[i + 1][j];
  //         }
  //       }
  //     }
  //     return colIsCompleted;
  //   };
  // }

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
