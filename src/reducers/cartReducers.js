import { ADD_CART_ITEM, REMOVE_CART_ITEM } from "../constants/cartConstants";

//##########################################################
export const cartReducers = (state = { cartItems: [] }, action) => {
  //
  switch (action.type) {
    //###################################################

    case ADD_CART_ITEM:
      //
      const item = action.payload;
      //check if item already exist in cart

      const productExist = state.cartItems.find(
        (x) => x.product === item.product
      );
      //if product exist replace with the new item else if product does not match add new item
      if (productExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === productExist.product ? item : x
          ),
        };
      } else {
        // add new item if existing item exist with different id
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    //###################################################
    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };

    default:
      return state;
  }
};
