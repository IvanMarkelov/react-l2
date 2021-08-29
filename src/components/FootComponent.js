import { Card, Label, FormGroup, InputGroup, Button } from "@blueprintjs/core";
import React, { Component } from "react";

export default class FootComponent extends Component {
  render() {
    return (
      <Card style={{ background: "aliceblue", display: "flex", justifyContent: "center" }}>

        <Label className="contact-info" >
          Contact Info
          <img style={{ maxWidth: "20px" }} src="./logo.png" alt="logo" />
          <h5>+7(995)111 11 11</h5>
          <FormGroup style={{display: "flex"}} >
            <InputGroup  id="text-input" placeholder="Enter your email" />
            <Button icon="envelope" text="Subscribe" />
          </FormGroup>
        </Label>
        <Label className="about-us">
          About Us
          <ul>
            <li>Company</li>
            <li>Special thanks</li>
            <li>Our rewards</li>
            <li>Press</li>
          </ul>
        </Label>
        <Label className="add-info">
          Additional Information
          <ul>
            <li>How to reserve a tour</li>
            <li>Insurance</li>
            <li>Gift cards</li>
            <li>FAQ</li>
          </ul>
        </Label>
      </Card>
    );
  }
}
