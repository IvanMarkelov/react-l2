import { Card, Label } from "@blueprintjs/core";
import { Component, default as React} from "react";
import Lorem from "react-lorem-component";

export default class ArticleComponent extends Component {
  render() {
    return (
      <Card>
        <Label>
          <h2>Welcome to Paradise!</h2>
          <img src="https://pix10.agoda.net/hotelImages/7458162/0/7f4358186315b615d5186aa4a00512ad.jpg?s=1024x768" alt="photo" style={{maxHeight: "450px"}} />
        </Label>
        <Lorem count="12"></Lorem>
      </Card>
    );
  }
}
