import React, { Component } from 'react';
import { number } from 'prop-types';

class ShowMultiply extends Component {
  render() {
    const { a, b } = this.props;
    return (
      <h1>
        { a * b }
      </h1>
    );
  }
}

ShowMultiply.propTypes = {
  a: number.isRequired,
  b: number,
};

ShowMultiply.defaultProps = {
  b: 5,
};

class LPropstype extends Component {
  render() {
    return (
      <div>
        <ShowMultiply a={1} b={5} />
        <ShowMultiply a={5} b={5} />
        <ShowMultiply a={5} b={2} />
        <ShowMultiply a={1} />
      </div>
    )
  }
}

export default LPropstype;
