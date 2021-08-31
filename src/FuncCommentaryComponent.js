import React, { createRef } from "react";
import "./App.css";

function FuncCommentaryComponent() {
  const [stateComments, setStateComments] = React.useState([]);

  let myRef = createRef();

  let addComment = () => {
    let currentCommentValue = myRef.current.value;
    //let comments = stateComments;
   // comments.push(currentCommentValue);
    let comments = [...stateComments, currentCommentValue]
    
    setStateComments(comments);
    myRef.current.value = "";
  };

  return (
    <div>
      <h1>FUNCTIONAL COMPONENT</h1>
      <textarea ref={myRef}></textarea>
      <button onClick={addComment}>Add Comment</button>
      <ul>
        {stateComments.map((item, index) => (
          <li key={index.toString()}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FuncCommentaryComponent;
