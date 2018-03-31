/** see in react lifecycle https://hackernoon.com/reactjs-component-lifecycle-methods-a-deep-dive-38275d9d13c0 */
import React, { Component } from "react";

const LOG_FONT_RED = "color: red; font-size: 30px; font-weight: bold;";
const LOG_FONT_GREEN = "color: green; font-size: 30px; font-weight: bold;";

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
    const { countInnerClick } = this.state;
    const { countOuterClick } = this.props;
    return (
      <div>
        <button
          style={{ backgroundColor: "purple", color: "white", padding: "20px" }}
          onClick={() => {
            this.setState({ countInnerClick: countInnerClick + 1 });
          }}
        >
          <span style={{ fontSize: "25px" }}>update state</span> in LogOnly
          component
        </button>
        <p>{"current props => countOuterClick = " + countOuterClick}</p>
        <p>{"current state => countInnerClick = " + countInnerClick}</p>
      </div>
    );
  }
}

class LLifecycle extends Component {
  state = {
    countOuterClick: 0
  };

  updeteOuterClick() {
    this.setState({ countOuterClick: countOuterClick + 1 });
  }

  render() {
    const { countOuterClick } = this.state;

    return (
      <div>
        <h1>2 Lifecycle</h1>
        <button
          style={{ backgroundColor: "purple", color: "white", padding: "20px" }}
          onClick={() => this.updeteOuterClick()}
        >
          <span style={{ fontSize: "25px" }}>update props </span> to LogEvery
          component
        </button>
        <LogEvery countOuterClick={countOuterClick} />
      </div>
    );
  }
}

export default LLifecycle;
