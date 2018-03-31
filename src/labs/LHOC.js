// Hot Example 
// code fresh
// code === โค้ด
// fresh === สด
// code fresh === โค้ดสด === TT
import React, { Component } from 'react';

// 1.
const Button = props => (
  <button
    style={{ backgroundColor: "purple", color: "white", padding: "20px" }}
    onClick={() => {
      props.onClickButton();
      alert('Chalath Zaa!!');
    }}
  >
    {props.title}
  </button>
);

// 2.
const Input = props => (
  <div>
    <input
      type="text"
      onChange={() => {
        props.onChangeText();
        alert('Chalath Zaa!!');
      }}
    /> {props.title}
  </div>
);

// 3.
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
      <button
        onClick={() => {
          this.openReactPage();
          alert('Chalath Zaa!!');
        }}
      >
        show react page
      </button>
    );
  }
}

class LHOC extends Component {
  render() {
    return (
      <div>
        <Button title="stateless button" onClickButton={() => { /* TODO Something */ }}/>
        <br />
        <br />
        <br />
        <Input title="stateless input text" onChangeText={() => { /* TODO Something */ }}/>
        <br />
        <br />
        <ButtonCallReactPage />
      </div>
    );
  }
}

export default LHOC; 
