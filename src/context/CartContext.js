import React, { useState, createContext, useEffect, useReducer } from "react";
import axios from "axios";
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
  const [grandTotal, setGrandTotal] = useState(0.0);
  const [Total, setTotal] = useState(0.0);
  const [Price, setPrice] = useState(0.0);
  const [ProductName, setProductName] = useState("");
  const [ProductQuantity, setProductQuantity] = useState(0);
  const [Tax, setTax] = useState(0);
  const [Cart, setCart] = useState([]);
  const [PrintReciptToMail, setPrintReciptToMail] = useState(false);

  //###################################################################

  const getAllProducts = async () => {};

  //###################################################################

  const addToCart = async (id) => {
    console.log("adding item to cart...");

    //get id of the product
    let getproductById = product.filter((x) => x.id === id);

    //check if the product is available
    if (!getproductById) {
      return;
    }
    //add
    const add = getproductById;

    setCart(add);

    // set the cart items in local storage;
    localStorage.setItem("Cart-Item(s)", JSON.stringify(Cart));
  };

  //###################################################################

  const checkOut = () => {
    console.log("Checking out cart...");

    // get all the cart items in local storage;
    const checkOutItems = localStorage.getItem(
      "Cart-Item(s)",
      JSON.parse(Cart)
    );

    console.log(`Cart Items ${checkOutItems}`);
  };
  //###################################################################

  const incrementCart = (id) => {
    console.log("increasing the number of item cart...");

    //get id of the product
    let getproductById = product.filter((x) => x.id === id);

    //check if the product is in the cart already if not
    if (!getproductById) {
      return;
    }
    //increment
    const increase = getproductById++;

    setCart(increase);
  };
  //###################################################################

  const decrementCart = (id) => {
    console.log("decreasing the number of item cart...");

    //get id of the product
    let getproductById = product.filter((x) => x.id === id);

    //check if the product is in the cart already if not
    if (!getproductById) {
      return;
    }
    //decrement
    const decrease = getproductById--;

    setCart(decrease);
  };
  //###################################################################

  const deleteAllCartItems = (id) => {
    console.log("deleting all number of cart items with a specfic id...");

    //get id of the product
    let getproductById = product.filter((x) => x.id === id);
    let doNotDeleteOthers = product.filter((c) => c.id !== id);

    //check if the product is in the cart already if not
    if (!getproductById) {
      return;
    }
    //id checks
    if (getproductById) {
      //reset
      const reset = [];

      setCart(reset);
    }
  };

  //###################################################################

  const clearAllCartItems = () => {
    console.log("Clearing all cart...");
    //set to empty
    setCart([]);
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
        addToCart,
        grandTotal,
        Price,
        Total,
        ProductName,
        ProductQuantity,
        Tax,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
