import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="col">
          <h2>
            Your age:<span>{this.props.age}</span>
          </h2>
          <br />
          <button className="button" onClick={this.props.onAgeUp}>
            <strong>Age Up</strong>
          </button>
          <button className="button" onClick={this.props.onAgeDown}>
            <strong> Age Down</strong>
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToprops = state => {
  return {
    age: state.age
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onAgeUp: value => dispatch({ type: "AGE_UP", value: 1 }),
    onAgeDown: value => dispatch({ type: "AGE_DOWN", value: 1 })
  };
};

export default connect(
  mapStateToprops,
  mapDispatchToProps
)(App);
