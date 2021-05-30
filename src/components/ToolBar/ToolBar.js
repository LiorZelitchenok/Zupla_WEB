import React, { Component } from "react";
import Logs from '../Logs.js/Logs'
import axios from "axios";
export default class ToolBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: null,
    };
  }

  render() {
    const getLogs = async () => {
      let response = await axios.get("https://zupla.herokuapp.com/logs");
      if (response.data !== "No logs for now ...") {
        this.setState({ logs: response.data });
      } else {
        alert("No logs for now ...");
      }
    };
    return (
      <div>
        <div>
          <button onClick={getLogs}>Get Logs</button>
          {this.state.logs ? <Logs logs={this.state.logs} /> : ""}
        </div>
      </div>
    );
  }
}
