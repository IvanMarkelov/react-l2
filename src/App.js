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
        borderRadius: "15px",
        maxWidth: "25%",
        padding: "5px 5px",
        margin: "5px 5px",
      }}
      className={classes.join(' ')}
      onClick={props.onMark}
    >
      <img style={{maxWidth: "80%"}} src={props.car.imageSource} alt={props.car.name}/>
      <h3>Наименование: {props.car.name}</h3>
      <p>Стоимость проката/час: {props.car.price}</p>
      <p>Уровень заряда: {props.car.chargeLevel}%</p>
    </div>
  );
}

class App extends Component {
  state = {
    cars: [
      { marked: false, imageSource: "./trollo.jpg", chargeLevel: 75, name: "Trollo", price: 200 },
      { marked: false, imageSource: "./mgp.jpg", chargeLevel: 25, name: "MGP", price: 150 },
      { marked: false, imageSource: "./swifty.jpg", chargeLevel: 90, name: "Swifty", price: 250 },
      { marked: false, imageSource: "./foxpro.jpg", chargeLevel: 100, name: "FOX Pro", price: 250 },
      { marked: false, imageSource: "./crops.png", chargeLevel: 80, name: "Crops", price: 230 },
      { marked: false, imageSource: "./melon.jpg", chargeLevel: 40, name: "Melon", price: 200 },
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
