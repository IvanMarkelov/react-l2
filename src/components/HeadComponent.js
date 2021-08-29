import {
  Button, InputGroup, Menu
} from "@blueprintjs/core";
import React, { Component } from "react";

class HeadComponent extends Component {
  render() {
    return (
      <Menu style={{ background: "gold", alignSelf: "flex-start" }}>
        <InputGroup placeholder="FROM" />
        <InputGroup placeholder="WHERE" />
        <InputGroup placeholder="WHEN" />
        <InputGroup placeholder="HOW LONG" />
        <Button icon="search" text="Find Your Trip" />
      </Menu>
    );
  }
}

export default HeadComponent;
