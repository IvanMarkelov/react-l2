import { Component } from "react";
import {
  Button,
  H5,
  Icon,
  IconSize,
  InputGroup,
  Intent,
  Menu,
  MenuItem,
  Spinner,
  Switch,
  Tag,
} from "@blueprintjs/core";

class HeadComponent extends Component {
  render() {
    return (
      <Menu>
        <InputGroup placeholder="FROM"/>
        <InputGroup placeholder="WHERE"/>
        <InputGroup placeholder="WHEN"/>
        <InputGroup placeholder="HOW LONG"/>
      </Menu>
    );
  }
}

export default HeadComponent;
