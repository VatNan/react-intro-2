/** step 3.1 call Stateless
 * call Stateless Component and pass props 
 * - title = "show alert"
 * - onClickButton = alertNow
 * in render of Stateful Component */

/** step 3.2 rename component
 * Stateless => Button
 * Stateful => ButtonCallAlert
 
/** step 3.3 create CallReactPage component
 * create ButtonCallReactPage component
 * >0<
 * hint: window.open('https://reactjs.org/', '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
*/

/** step 3.4 create CallReactPage component
 * create ButtonCountMe component
 * >0< */



import React, { Component } from 'react';

/** Stateful component or Class component
 * - can have props (read props, prop-types, default props)*/
function Stateless(props) {
  return (
    <button
      style={{ backgroundColor: "purple", color: "white", padding: "20px" }}
      onClick={props.onClickButton}
    >
      {props.title}
    </button>
  );
}

/** Stateful component or Class component
 * - can have props (read props, prop-types, default props)
 * - can have state (use state, set state)
 * - have lifecycle */
class Stateful extends Component {
  alertNow() {
    alert('Alert by alertNow()');
  }

  alertSlowLife() {
    setTimeout(() => alert('Alert by alertSlowLife()'), 5000);
  }
  
  render() {
    return (
      <div /> 
    );
  }
}



class LStatelessAndStateful extends Component {
  render() {
    return (
      <div>
        <h1>3 Stateful component and Stateless component </h1>
        <Stateful />
        {/* <ButtonCallReactPage /> */}
        {/* <ButtonCountMe /> */}
      </div>
    );
  }
}

export default LStatelessAndStateful;
