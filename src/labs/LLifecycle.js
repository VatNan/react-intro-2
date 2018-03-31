/** see in react lifecycle https://hackernoon.com/reactjs-component-lifecycle-methods-a-deep-dive-38275d9d13c0 */
import React, { Component } from "react";

const LOG_FONT_RED = "color: red; font-size: 30px; font-weight: bold;";
const LOG_FONT_GREEN = "color: green; font-size: 30px; font-weight: bold;";

/** step 2.1 mount to DOM
 * see log in devtool of browser */

/** step 2.2 state update
 * click button 'update state in LogOnly component'
 * see log in devtool of browser */

/** step 2.3 props update
 * click button 'update props in LogOnly component'
 * see log in devtool of browser */

// this example not have case componentWillUnmount

/** step 2.4 Try it.
 * comment componentWillReceiveProps, shouldComponentUpdate in LogEvery
 * click button 'update props in LogOnly component'
 * see log in devtool of browser
 * umcomment componentWillReceiveProps, shouldComponentUpdate in LogEvery */

/** step 2.5 Try it.
 * comment render in LogEvery
 * .....
 * uncomment render in LogEvery */

/** step 2.6 Try it.
 * comment render in LogEvery
 * .....
 * uncomment render in LogEvery */

/** step 2.7 Try it.
 * edit shouldComponentUpdate in LogEvery to return false
 * click button 'update state in LogOnly component'
 * see log in devtool of browser
 * click button 'update props in LogOnly component'
 * see log in devtool of browser
 * edit shouldComponentUpdate in LogEvery to return true */

/** step 2.8 refactoring */

class LogEvery extends Component {
  constructor() {
    super();
    this.state = {
      countInnerClick: 0
    };
    console.log("%c method: constructor", LOG_FONT_RED);
  }

  componentWillMount() {
    console.log("%c method lifecycle: componentWillMount", LOG_FONT_GREEN);
  }

  componentDidMount() {
    console.log("%c method lifecycle: componentDidMount", LOG_FONT_GREEN);
  }

  componentWillReceiveProps() {
    console.log(
      "%c method lifecycle: componentWillReceiveProps",
      LOG_FONT_GREEN
    );
  }

  shouldComponentUpdate() {
    console.log("%c method lifecycle: shouldComponentUpdate", LOG_FONT_GREEN);
    return true;
  }

  componentWillUpdate() {
    console.log("%c method lifecycle: componentWillUpdate", LOG_FONT_GREEN);
  }

  componentDidUpdate() {
    console.log("%c method lifecycle: componentDidUpdate", LOG_FONT_GREEN);
  }

  componentWillUnmount() {
    console.log("%c method lifecycle: componentWillUpdate", LOG_FONT_GREEN);
  }

  render() {
    console.log("%c method lifecycle: render ***UI UPDATE", LOG_FONT_GREEN);
    return (
      <div>
        <button
          style={{ backgroundColor: "purple", color: "white", padding: "20px" }}
          onClick={() => {
            this.setState({ countInnerClick: this.state.countInnerClick + 1 });
          }}
        >
          <span style={{ fontSize: "25px" }}>update state</span> in LogOnly
          component
        </button>
        <p>
          {"current props => countOuterClick = " + this.props.countOuterClick}
        </p>
        <p>
          {"current state => countInnerClick = " + this.state.countInnerClick}
        </p>
      </div>
    );
  }
}

class LLifecycle extends Component {
  state = {
    countOuterClick: 0
  };

  render() {
    return (
      <div>
        <h1>2 Lifecycle</h1>
        <button
          style={{ backgroundColor: "purple", color: "white", padding: "20px" }}
          onClick={() => {
            this.setState({ countOuterClick: this.state.countOuterClick + 1 });
          }}
        >
          <span style={{ fontSize: "25px" }}>update props </span> to LogEvery
          component
        </button>
        <LogEvery countOuterClick={this.state.countOuterClick} />
      </div>
    );
  }
}

export default LLifecycle;
