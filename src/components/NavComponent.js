import {
  Alignment,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider,
  Button,
} from "@blueprintjs/core";
import React, { Component } from "react";

export default class NavComponent extends Component {
  render() {
    return (
      <Navbar>
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>Travel Co</NavbarHeading>
          <NavbarDivider />
          <Button icon="third-party" text="Tours" />
          <Button icon="home" text="Housing" />
          <Button icon="airplane" text="Flights" />
          <Button icon="percentage" text="Special offers" />
          <Button icon="mountain" text="Extreme" />
        </NavbarGroup>
      </Navbar>
    );
  }
}
