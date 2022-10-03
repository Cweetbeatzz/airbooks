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

  const result = loading ? error : product;

  const [Products, setProducts] = useState(ProductData);
  const [Cart, setCart] = useState([]);

  //###################################################################

  const getAllProducts = async () => {
    try {
      const { data } = await Axios.get(
        "/fashion5/api/v1/products/getAllProducts"
      );
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const checkOut = (id) => {};
  //###################################################################

  const incrementCart = () => {};
  //###################################################################

  const decrementCart = () => {};
  //###################################################################

  const deleteAllCartItems = () => {};
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
