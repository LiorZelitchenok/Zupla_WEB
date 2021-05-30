import React, { Component } from "react";

export default class Logs extends Component {
  constructor(props) {
    super(props);
    this.state = { markedLogs: [], ruleName: "" };
  }
  render() {
    const { logs } = this.props;

    //Add log to markedLogs array
    const addLog = (log) => {
      let tmpArray = this.state.markedLogs;
      tmpArray.push(log);
      this.setState({ markedLogs: tmpArray });
    };

    //Send logs and rule to API
    const sendRules = async () => {
      let rules = {
        ruleName: this.state.ruleName,
        logs: this.state.markedLogs,
      };
      let response = await axios.post(
        "https://zupla.herokuapp.com/rules",
        rules
      );
    };

    //
    const ruleNameChange = (e) => {
      this.setState({ ruleName: e.target.value });
    };
    return (
      <div>
        <div>
          <span>Rule Name :</span>
          <input type="text" onChange={(e) => ruleNameChange(e)} />
        </div>
        {logs.map((log, index) => {
          return (
            <div key={index}>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <input type="checkbox" onChange={() => addLog(log)} />
                  <spa>
                    Priority: {log.priority} || Time : {log.time} || Tag :{" "}
                    {log.time} || Text : {log.text}
                  </spa>
                </li>
              </ul>
            </div>
          );
        })}
        <div>
          <button onClick={sendRules}>Send Rules</button>
        </div>
      </div>
    );
  }
}
