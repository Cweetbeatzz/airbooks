import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Store from "./redux/Store";
import { Provider } from "react-redux";
import { CartContextProvider } from "./context/CartContext";

ReactDOM.render(
  <Provider store={Store}>
    <React.StrictMode>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
