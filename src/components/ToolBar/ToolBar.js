import React, { Component } from "react";
import axios from 'axios'
export default class ToolBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    async function  startRecording() {
     let startRecording =  await axios.post('https://zupla.herokuapp.com/startRecording',{hey:'hey',hello:'hello'})
     console.log(startRecording.data);
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
