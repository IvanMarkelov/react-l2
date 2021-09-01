import React, { Component } from "react";
import "./App.css";

function Car(props) {
  const classes = ["card"];

  if (props.car.marked) {
    classes.push("marked");
  }

  return (
    <div
      style={{
        border: "1px black solid",
        maxWidth: "25%",
        padding: "5px 5px",
        margin: "5px 5px",
      }}
      className={classes.join(' ')}
      onClick={props.onMark}
    >
      <h3>{props.car.name}</h3>
      <p>{props.car.price}</p>
    </div>
  );
}

class App extends Component {
  state = {
    cars: [
      { marked: false, name: "BMW", price: 20000 },
      { marked: false, name: "Mercedes", price: 15000 },
      { marked: false, name: "Audi", price: 25000 },
    ],
  };

  handleMarked(name) {
    const cars = this.state.cars.concat();

    const car = cars.find((c) => c.name === name);
    car.marked = !car.marked;

    this.setState({
      cars: cars,
    });
  }

  render() {
    return this.state.cars.map((car) => {
      return (
        <Car
          car={car}
          key={car.name + Math.random()}
          onMark={this.handleMarked.bind(this, car.name)}
        />
      );
    });
  }
}

export default App;
