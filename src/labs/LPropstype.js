import React, { Component } from "react";
/** step 1.1 import prop-types underline */

class ShowMultiply extends Component {
  render() {
    return <h1>{this.props.a * this.props.b}</h1>;
  }
}

/** step 1.2 check type a and b is number */
/** step 1.3 a is require and b have default is 5 */
ShowMultiply.propTypes = {};

ShowMultiply.defaultProps = {};

class LProptypes extends Component {
  render() {
    return (
      <div>
        <h1>1 PropTypes and DefaultProps</h1>
        <ShowMultiply a={1} b={5} />
        <ShowMultiply a="5" b={"5"} />
        <ShowMultiply a={5} b={2} />
        <ShowMultiply a={1} />
      </div>
    );
  }
}

/** step 1.4 clear warning and refactoring code by ESNext */
export default LProptypes;
