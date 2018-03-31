import React, { Component } from "react";

const Button = props => (
  <button
    style={{ backgroundColor: "purple", color: "white", padding: "20px" }}
    onClick={() => props.onClickButton()}
  >
    {props.title}
  </button>
);

class ButtonCallAlert extends Component {
  alertNow() {
    alert("Alert by alertNow()");
  }

  alertSlowLife() {
    setTimeout(() => alert("Alert by alertSlowLife()"), 5000);
  }

  render() {
    return (
      <Button title="show alert" onClickButton={() => this.alertSlowLife()} />
    );
  }
}

class ButtonCallReactPage extends Component {
  openReactPage() {
    window.open(
      "https://reactjs.org/",
      "_blank",
      "location=yes,height=570,width=520,scrollbars=yes,status=yes"
    );
  }

  render() {
    return (
      <Button
        title="show react page"
        onClickButton={() => this.openReactPage()}
      />
    );
  }
}

class ButtonCountMe extends Component {
  state = {
    count: 0
  };

  onCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <Stateless
        title={`show count me ${this.state.count}`}
        onClickButton={() => this.onCount()}
      />
    );
  }
}

class LStatelessAndStateful extends Component {
  render() {
    return (
      <div>
        <h1>3 Stateful component and Stateless component </h1>
        <ButtonCallAlert />
        <ButtonCallReactPage />
        <ButtonCountMe />
      </div>
    );
  }
}

export default LStatelessAndStateful;
