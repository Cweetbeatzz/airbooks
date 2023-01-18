import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";
import {
  getAllCategoriesAction,
  getCategoryByIdAction,
  createCategoryAction,
  updateCategoryAction,
  deleteCategoryAction,
} from "../Actions/categoryActions";

const initialState = { load: true, categories: [], err: "" };

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    //#################################################################################
    //get all categories
    builder.addCase(getAllCategoriesAction.pending, (state, action) => {
      state.load = true;
    });
    builder.addCase(getAllCategoriesAction.fulfilled, (state, action) => {
      state.load = false;
      state.categories = action.payload;
      state.err = "";
    });
    builder.addCase(getAllCategoriesAction.rejected, (state, action) => {
      state.load = false;
      state.categories = [];
      state.err = action.err.message;
    });
    //#################################################################################
    //get categories by id
    builder.addCase(getCategoryByIdAction.pending, (state, action) => {
      state.load = true;
    });
    builder.addCase(getCategoryByIdAction.fulfilled, (state, action) => {
      state.load = false;
      state.categories = action.payload;
      state.err = "";
    });
    builder.addCase(getCategoryByIdAction.rejected, (state, action) => {
      state.load = false;
      state.categories = {};
      state.err = action.err.message;
    });
    //#################################################################################
    //create categories
    builder.addCase(createCategoryAction.pending, (state, action) => {
      state.load = true;
    });
    builder.addCase(createCategoryAction.fulfilled, (state, action) => {
      state.load = false;
      state.categories = action.payload;
      state.err = "";
    });
    builder.addCase(createCategoryAction.rejected, (state, action) => {
      state.load = false;
      state.categories = {};
      state.err = action.err.message;
    });
    //#################################################################################
    //edit categories
    builder.addCase(updateCategoryAction.pending, (state, action) => {
      state.load = true;
    });
    builder.addCase(updateCategoryAction.fulfilled, (state, action) => {
      state.load = false;
      state.categories = action.payload;
      state.err = "";
    });
    builder.addCase(updateCategoryAction.rejected, (state, action) => {
      state.load = false;
      state.categories = {};
      state.err = action.err.message;
    });
    //#################################################################################
    //delete categories
    builder.addCase(deleteCategoryAction.pending, (state, action) => {
      state.load = true;
    });
    builder.addCase(deleteCategoryAction.fulfilled, (state, action) => {
      state.load = false;
      state.categories = action.payload;
      state.err = "";
    });
    builder.addCase(deleteCategoryAction.rejected, (state, action) => {
      state.load = false;
      state.categories = {};
      state.err = action.err.message;
    });
    //#################################################################################
  },
});

// export const {
//   getAllCategoriesAction
//   getCategoryByIdAction,
//   createCategoryAction,
//   updateCategoryAction,
//   deleteCategoryAction,
// } = categoriesSlice.actions;

export default categoriesSlice.reducer;
