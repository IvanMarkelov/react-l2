import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state.a = props.sideA;
    this.state.h = props.height;
    this.changeValueA = this.changeValueA.bind(this);
    this.changeValueH = this.changeValueH.bind(this);
  }

  state = {
    a: 12,
    h: 10,
  }

  changeValueA(event) {
    this.setState({a: event.target.value});
   //!!! this.state.a = event.target.value;
  }

  changeValueH(event) {
    this.setState((state) => {

      return {
        h: event.target.value
      }
    });
  }

  render() {
    const answ = this.state.a * this.state.h / 2;
    return (
      <div className="App">
        <input type="number" onChange={this.changeValueA} value={this.state.a}/>
        <input type="number" onChange={this.changeValueH} value={this.state.h}/>
        <h1>{answ}</h1>
      </div>
    );
  }
}

export default App;
