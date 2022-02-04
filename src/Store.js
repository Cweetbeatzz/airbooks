import data from "";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {
  ProductDetailsReducer,
  ProductListReducer,
} from "./reducers/productsReducers";

//
const intialState = {};

// a reducer returns a new state
const reducer = combineReducers({
  productList: ProductListReducer,
  productDetails: ProductDetailsReducer,
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
