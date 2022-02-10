import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Store from "./redux/Store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={Store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
