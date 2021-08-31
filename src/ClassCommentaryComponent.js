import React, { createRef } from "react";
import "./App.css";

class ClassCommentaryComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      comments: [],
      counter: 0,
    };
    this.myRef = createRef();
    this.addComment = this.addComment.bind(this);
  }

  addComment() {
    let currentCommentValue = this.myRef.current.value;
    let comments = this.state.comments;
    comments.push(currentCommentValue);
    this.setState({
      comments: comments,
    });
    this.myRef.current.value = "";
  }

  render() {
    console.log(this.myRef);
    return (
      <div>
        <h1>CLASS COMPONENT</h1>
        <textarea ref={this.myRef}></textarea>
        <button onClick={this.addComment}>Add Comment</button>
        <ul>
          {this.state.comments.map((item, index) => (
            <li key={index.toString()}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ClassCommentaryComponent;
