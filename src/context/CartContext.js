import React, { useState, createContext, useEffect, useReducer } from "react";
import Axios from "axios";
import { ProductData } from "../Data/Products";
import { useDispatch, useSelector } from "react-redux";
import { ProductListReducer } from "../redux/reducers/productsReducers";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  //###################################################################
  // const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, product } = productList;

  const [products, dispatch] = useReducer(ProductListReducer, []);

  const [Products, setProducts] = useState(ProductData);
  const [Cart, setCart] = useState([]);

  //###################################################################

  const getAllProducts = async () => {};

  const checkOut = () => {
    console.log("Checking out cart...");
  };
  //###################################################################

  const incrementCart = () => {
    console.log("increasing the number of item cart...");
  };
  //###################################################################

  const decrementCart = () => {
    console.log("decreasing the number of item cart...");
  };
  //###################################################################

  const deleteAllCartItems = () => {
    console.log("deleting all number of cart items with a specfic id...");
  };

  //###################################################################

  const clearAllCartItems = () => {
    console.log("Clearing all cart...");
  };

  //###################################################################

  useEffect(() => {}, []);

  //###################################################################

  return (
    <CartContext.Provider
      value={{
        Products,
        Cart,
        setCart,
        checkOut,
        incrementCart,
        decrementCart,
        deleteAllCartItems,
        getAllProducts,
        products,
        dispatch,
        productList,
        clearAllCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
