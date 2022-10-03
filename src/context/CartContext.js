import React, { useState, createContext, useEffect } from "react";
import Axios from "axios";
import ProductData from "../Data/Products";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  //###################################################################

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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
