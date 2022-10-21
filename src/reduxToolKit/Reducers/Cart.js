import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductData } from "../../Data/Products";

const initialState = {
  load: true,
  cart: ProductData,
  total: 0,
  amount: 0,
  err: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    //####################################
    addCartItem: (state, action) => {
      const id = action.payload;
      const output = state.cart.find((val) => val._id === id);
      //TODO ADD
      state.cart = [];
    },
    //###################################
    increaseCartItem: (state, action) => {
      const id = action.payload;
      const output = state.cart.find((val) => val._id === id);
      state.cart = output.amount + 1;
    },
    //###################################
    decreasCartItem: (state, action) => {
      const id = action.payload;
      const output = state.cart.find((val) => val._id !== id);
      state.cart = output.amount - 1;
    },
    //###################################
    deleteCartItem: (state, action) => {
      const id = action.payload;
      const output = state.cart.filter((val) => val._id !== id);
      state.cart = output;
    },
    //###################################
    total: (state, action) => {
      let amount = 0;
      let total = 0;

      state.cart.foreach((item) => {
        amount += item.amount;
        total += item.total * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
    //###################################
    grandTotal: (state) => {
      state.cart = [];
    },
    //###################################
    calculateTax: (state) => {
      state.cart = [];
    },
    //###################################
    clearCart: (state) => {
      state.cart = [];
    },
    //###################################
  },
  extraReducers: (builder) => {
    //#################################################################################
    //get all carts
    // builder.addCase(getAllCategoriesAction.pending, (state, action) => {
    //   state.load = true;
    // });
    //#################################################################################
  },
});

export const {
  addCartItem,
  increaseCartItem,
  decreasCartItem,
  deleteCartItem,
  total,
  grandTotal,
  calculateTax,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
