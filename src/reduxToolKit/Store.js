import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Reducers/Cart";
import categoryReducer from "./Reducers/Categories";
import modalReducer from "./Reducers/Modal";
//####################################################################

const preloadedState = {
  // check web browser if user has been logged in before to get credientials otherwise set new when user is logged in
  // userLogin: {
  //   userInfo: localStorage.getItem("userInfo")
  //     ? JSON.parse(localStorage.getItem("userInfo"))
  //     : null,
  // },
};
//####################################################################

const reducer = {
  categ: categoryReducer,
  cart: cartReducer,
  modal: modalReducer,
};

//####################################################################

// const middleware = [...getDefaultMiddleware(), logger];

//####################################################################

const Store = configureStore({
  reducer,
  // middleware,
  devTools: process.env.NODE_ENV !== "production",
  preloadedState,
  // enhancers: [reduxBatch],
});

//####################################################################

export default Store;
