import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import store from "./stores/Store";

import { Provider } from "mobx-react";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
