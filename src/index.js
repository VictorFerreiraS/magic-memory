import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// Redux
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// Reducers
import cardReducer from "./features/cards"

const store = configureStore({
  reducer: {
    cardsRedux: cardReducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
