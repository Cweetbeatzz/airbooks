import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { cartReducers } from "./reducers/cartReducers";
import {
  CategoryByIdReducer,
  CategoryListReducer,
  createCategoryReducer,
  deleteCategoryReducer,
  updateCategoryReducer,
} from "./reducers/categoryReducer";
import {
  createOrderReducer,
  getOrderByIdReducer,
} from "./reducers/orderReducers";
import {
  createProductReducer,
  deleteProductReducer,
  ProductDetailsReducer,
  ProductListReducer,
  updateProductReducer,
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
  // check web browser if user has been logged in before to get credientials otherwise set new when user is logged in
  userLogin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
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
  productUpdate: updateProductReducer,
  createProduct: createProductReducer,
  delProduct: deleteProductReducer,
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
  categoryList: CategoryListReducer,
  categoryById: CategoryByIdReducer,
  createCategory: createCategoryReducer,
  updateCategory: updateCategoryReducer,
  deleteCategory: deleteCategoryReducer,
  //order
  createOrder: createOrderReducer,
  orderById: getOrderByIdReducer,
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
