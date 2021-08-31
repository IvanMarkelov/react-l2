import React, { useState } from "react";
import "./App.css";

function FunctionalApp(props) {
  const [counter, setCounter] = useState(0);

  const handlerClick = (event) => {
    setCounter(counter + 1);
  };

  const handlerMouseEnter = () => {
    console.log("handlerMouseEnter");
  };

  const handlerMouseLeave = () => {
    console.log("handlerMouseLeave");
  };

  return (
    <button
      onClick={handlerClick}
      onMouseEnter={handlerMouseEnter}
      onMouseLeave={handlerMouseLeave}
    >
      На меня нажали Func {counter} раз
    </button>
  );
}

export default FunctionalApp;
