import Axios from "axios";
import {
  CATEGORY_CREATE_FAIL,
  CATEGORY_CREATE_REQUEST,
  CATEGORY_CREATE_SUCCESS,
  CATEGORY_DELETE_FAIL,
  CATEGORY_DELETE_REQUEST,
  CATEGORY_DELETE_SUCCESS,
  CATEGORY_DETAILS_FAIL,
  CATEGORY_DETAILS_REQUEST,
  CATEGORY_DETAILS_SUCCESS,
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  CATEGORY_UPDATE_FAIL,
  CATEGORY_UPDATE_REQUEST,
  CATEGORY_UPDATE_SUCCESS,
} from "../constants/categoryConstants";

//###################################################

export const getAllCategoriesAction = () => async (dispatch) => {
  //###
  dispatch({
    type: CATEGORY_LIST_REQUEST,
  });
  //###
  try {
    const { data } = await Axios.get(
      "/fashion5/api/v1/category/getAllCategories"
    );
    dispatch({
      type: CATEGORY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORY_LIST_FAIL,
      payload: error.message,
    });
  }
};
//###################################################

export const getCategoryByIdAction = (categoryId) => async (dispatch) => {
  //###
  dispatch({
    type: CATEGORY_DETAILS_REQUEST,
    payload: categoryId,
  });
  //###
  try {
    const { data } = await Axios.get(
      `/fashion5/api/v1/category/getCategoriesById/${categoryId}`
    );
    dispatch({
      type: CATEGORY_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORY_DETAILS_FAIL,
      payload: error.message,
    });
  }
};

//###################################################

export const createCategoryAction = (categoryName) => async (dispatch) => {
  //###
  dispatch({
    type: CATEGORY_CREATE_REQUEST,
    payload: { categoryName },
  });
  //###
  try {
    const { data } = await Axios.post(
      "/fashion5/api/v1/category/createCategories",
      { categoryName }
    );
    dispatch({
      type: CATEGORY_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORY_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//#######################################################

export const updateCategoryAction = (categoryId) => async (dispatch) => {
  //###
  dispatch({
    type: CATEGORY_UPDATE_REQUEST,
    payload: categoryId,
  });
  //###
  try {
    const { data } = await Axios.post(
      `/fashion5/api/v1/category/updateCategoriesById/${categoryId}`
    );
    dispatch({
      type: CATEGORY_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORY_UPDATE_FAIL,
      payload: error.message,
    });
  }
};

//#######################################################

export const deleteCategoryAction = (categoryId) => async (dispatch) => {
  //###
  dispatch({
    type: CATEGORY_DELETE_REQUEST,
    payload: categoryId,
  });
  //###
  try {
    const { data } = await Axios.post(
      `/fashion5/api/v1/category/deleteCategoriesById/${categoryId}`
    );
    dispatch({
      type: CATEGORY_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORY_DELETE_FAIL,
      payload: error.message,
    });
  }
};

//#######################################################
