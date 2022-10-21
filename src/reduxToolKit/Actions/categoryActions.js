import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//###################################################
export const getAllCategoriesAction = createAsyncThunk(
  "category/getAllCategories",
  async () => {
    axios
      .get("/fashion5/api/v1/category/getAllCategories")
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }
);

//###################################################
export const getCategoryByIdAction = createAsyncThunk(
  `category/getCategoriesById`,
  async (id) => {
    axios
      .get(`/fashion5/api/v1/category/getCategoriesById/${id}`)
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }
);

//###################################################
export const createCategoryAction = createAsyncThunk(
  `category/createCategories`,
  async (categoryName) => {
    axios
      .get(`/fashion5/api/v1/category/createCategories`, {
        categoryName,
      })
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }
);

//###################################################
export const updateCategoryAction = createAsyncThunk(
  `category/updateCategoriesById`,
  async (id) => {
    axios
      .get(`/fashion5/api/v1/category/updateCategoriesById/${id}`)
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }
);

//###################################################
export const deleteCategoryAction = createAsyncThunk(
  `category/deleteCategoriesById`,
  async (id) => {
    axios
      .get(`/fashion5/api/v1/category/deleteCategoriesById/${id}`)
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }
);

//#######################################################
