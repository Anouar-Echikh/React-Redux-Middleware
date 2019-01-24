import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import reducer from "./store/reducer";

const logAge = store => {
  return next => {
    return action => {
      const result = next(action);
      console.log(
        `logged Action age in server cach memory (before updating state) : ${JSON.stringify(
          result
        )}`
      );
      return result;
    };
  };
};
const store = createStore(reducer, applyMiddleware(logAge));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
