import data from "";
import { createStore } from "@reduxjs/toolkit";

const intialState = {};

const reducer = (state, action) => {
  return { products: data.products };
};

const Store = createStore(reducer, intialState);

export default Store;
