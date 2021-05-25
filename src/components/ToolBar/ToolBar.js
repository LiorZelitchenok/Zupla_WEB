import React, { Component } from "react";
import axios from 'axios'
export default class ToolBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    async function  startRecording() {
     let startRecording =  await axios.post('http://www.localhost:4000/startRecording',{startRecording:'start'})
     
    }
    return (
      <div>
        <div>
          <button onClick={startRecording}>Start Recording</button>
        </div>
      </div>
    );
  }
}
