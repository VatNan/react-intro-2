import React, { Component } from "react";
import ReactDOM from "react-dom";

/** step 0 use component in other file.
 * comment class Intro
 * uncomment underline */
// import Intro from './Intro';

/** step 1 props-type
 * comment line 7
 * uncomment underline
 * change target component in ReactDOM.render to LPropstype component */
// import LPropstype from './labs/LPropstype';

/** step 2 props-type
 * comment line 13
 * uncomment underline
 * change target component in ReactDOM.render to LLifecycle component */
// import LLifecycle from "./labs/LLifecycle";

/** step 3 Stateless component vs Stateful component
 *  comment line 19
 *  uncomment underline
 *  change target component in ReactDOM.render to LStatelessAndStateful component */
// import LStatelessAndStateful from './labs/LStatelessAndStateful';

/** step 4 Controller component vs UnController component
 *  comment line 25
 *  uncomment underline
 *  change target component in ReactDOM.render to LStatelessAndStateful component */
// import LControllerComponent from './labs/LControllerComponent';

class Intro extends Component {
  render() {
    return (
      <div>
        <h1>Intro to React</h1>
      </div>
    );
  }
}

ReactDOM.render(<Intro />, document.getElementById("root"));
