import React, { Component } from "react";
import ToolBar from "../ToolBar/ToolBar";
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <header>
          <h1>Welcome</h1>
        </header>
        <ToolBar />
      </div>
    );
  }
}
