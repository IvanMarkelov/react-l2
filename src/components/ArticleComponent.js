import { Button, Card, Label } from "@blueprintjs/core";
import { Component, default as React } from "react";
import Lorem from "react-lorem-component";

export default class ArticleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleId: "luxury",
    };
    this.changeArticleState = this.handleArticleChange.bind(this);
    this.articleSwitch = this.articleSwitch.bind(this);
  }

  state = {
    articleId: "luxury",
  };

  handleArticleChange = (e) => {
    //console.log("Event: " + event);
    // console.log(this.articleId);
    // console.log(this.props);
    // console.log(e);
    // console.log(e.target.innerText.toLowerCase());
    this.setState({
      articleId: e.target.innerText.toLowerCase(),
    });
    console.log("Article ID: " + this.state.articleId);
  };

  articleSwitch() {
    switch (this.state.articleId) {
      case "luxury":
        return <Luxury />;
      case "active":
        return <Active />;
      case "extreme":
        return <Extreme />;
      default:
        return <Luxury />;
    }
  }

  render() {
    return (
      <Card>
        <Button onClick={this.handleArticleChange} text="Luxury" />
        <Button onClick={this.handleArticleChange} text="Active" />
        <Button onClick={this.handleArticleChange} text="Extreme" />
        {this.articleSwitch()}
      </Card>
    );
  }
}

function Luxury() {
  return (
    <div>
      <Label>
        <h2>Welcome to Paradise!</h2>
        <img
          src="https://pix10.agoda.net/hotelImages/7458162/0/7f4358186315b615d5186aa4a00512ad.jpg?s=1024x768"
          alt=""
          style={{ maxHeight: "450px" }}
        />
      </Label>
      <Lorem count="10"></Lorem>
    </div>
  );
}

function Active() {
  return (
    <div>
      <Label>
        <h2>Have as much fun as you can get</h2>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RkInnlkwe_cCkRi1PdeKhLYhqf9OALpVH4jqhVbfUM0jFGT0rmeG49A6Q4rIhBEj_Bo&usqp=CAU"
          alt=""
          style={{ maxHeight: "450px" }}
        />
      </Label>
      <Lorem count="5"></Lorem>
    </div>
  );
}

function Extreme() {
  return (
    <div>
      <Label>
        <h2>Push the limits</h2>
        <img
          src="https://media.istockphoto.com/photos/extreme-winter-climbing-picture-id518208206?k=20&m=518208206&s=612x612&w=0&h=XfmKR1EK_oSyy8OpWLG_2G5zRBY2t-APjDvXJlIgfLk="
          alt=""
          style={{ maxHeight: "450px" }}
        />
      </Label>
      <Lorem count="8"></Lorem>
    </div>
  );
}
