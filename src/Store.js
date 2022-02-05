import data from "";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { cartReducers } from "./reducers/cartReducers";
import {
  ProductDetailsReducer,
  ProductListReducer,
} from "./reducers/productsReducers";
import {
  createUserReducer,
  deleteUserReducer,
  loginUserReducer,
  updateUserReducer,
  userByIdReducer,
  userListReducer,
} from "./reducers/userReducers";

//
const intialState = {
  cart: {
    cartItems: localStorage.getItem("cartitem")
      ? JSON.parse(localStorage.getItem("cartitem"))
      : [],
  },
};

// a reducer returns a new state
const reducer = combineReducers({
  //product
  productList: ProductListReducer,
  productDetails: ProductDetailsReducer,
  //cart
  cart: cartReducers,
  //users
  usersList: userListReducer,
  userById: userByIdReducer,
  userUpdate: updateUserReducer,
  userDelete: deleteUserReducer,
  regUser: createUserReducer,
  userLogin: loginUserReducer,
  //categories
});

//
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//
const Store = createStore(
  reducer,
  intialState,
  composeEnhancer(applyMiddleware(thunk))
);

//
export default Store;
