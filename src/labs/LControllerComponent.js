/** step 4.1 implement Controller component to working */
/** step 4.2 implement UnController component to working */
import React, { Component } from "react";
const LOG_FONT_RED = "color: red; font-size: 30px; font-weight: bold;";
const LOG_FONT_GREEN = "color: green; font-size: 30px; font-weight: bold;";

class LControllerComponent extends Component {
  render() {
    return (
      <div>
        <h1>4 Controller component and UnController component</h1>
        <input type="text" value="" /> Controller component
        <br />
        <input type="text" /> UnController component
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
