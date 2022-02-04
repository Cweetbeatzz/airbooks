import Axios from "axios";
import { ADD_CART_ITEM } from "../constants/cartConstants";

//######################################################
export const addToCartAction =
  (productId, qty) => async (dispatch, getState) => {
    //getting the product
    const { data } = await Axios.get(`/fashion5/api/v1/products${productId}`);
    //dipatching the item
    dispatch({
      type: ADD_CART_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        product: data._id,
        qty,
      },
    });
    //add cart to local storage and by refreshing data stays persistent
    localStorage.setItem("cartitem", JSON.stringify(getState().cart.cartItems));
  };
