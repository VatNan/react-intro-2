import React, { Component } from "react";
const LOG_FONT_RED = "color: red; font-size: 30px; font-weight: bold;";
const LOG_FONT_GREEN = "color: green; font-size: 30px; font-weight: bold;";

class LControllerComponent extends Component {
  state = {
    controllerInput: ""
  };

  render() {
    return (
      <div>
        <h1>4 Controller component and UnController component</h1>
        <input
          type="text"
          value={this.state.controllerInput}
          onChange={e => this.setState({ controllerInput: e.target.value })}
        />{" "}
        Controller component
        <br />
        <input
          type="text"
          ref={input => (this.unControllerInput = input)}
        />{" "}
        UnController component
        <br />
        <button
          style={{ backgroundColor: "purple", color: "white", padding: "20px" }}
          onClick={() => {
            console.log(`%c value of Controller component: ??`, LOG_FONT_GREEN);
            console.log(`%c value of Controller component: ??`, LOG_FONT_RED);
          }}
        >
          log value
        </button>
      </div>
    );
  }
}

export default LControllerComponent;
