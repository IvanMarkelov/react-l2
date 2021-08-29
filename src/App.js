import logo from './logo.svg';
import './App.css';
import Fcomp from './Fcomponent';
import Ccomp from './Ccomponent';
import Acomp from './Afunction';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Fcomp name="Ivan" />
        <Ccomp numbers={[1,2,3,4,5]} />
        <Ccomp />
        <Acomp />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
