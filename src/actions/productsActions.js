import {
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
} from "../constants/productsConstants";
import Axios from "axios";

//###################################################

export const productListAction = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_LIST_REQUEST,
  });

  try {
    const data = await Axios.get("/fashion5/api/v1/products");
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};

//###################################################

export const productDetailsAction = (productId) => async (dispatch) => {
  dispatch({
    type: PRODUCT_DETAILS_REQUEST,
    payload: productId,
  });
  try {
    const data = await Axios.get(`/fashion5/api/v1/products/${productId}`);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//###################################################

export const createProductAction = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_CREATE_REQUEST,
  });

  try {
    const data = await Axios.get("/fashion5/api/v1/products/createProducts");
    dispatch({ type: PRODUCT_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_CREATE_FAIL, payload: error.message });
  }
};

//###################################################

export const updateProductAction = (productId) => async (dispatch) => {
  dispatch({
    type: PRODUCT_UPDATE_REQUEST,
    payload: productId,
  });

  try {
    const data = await Axios.get(
      `/fashion5/api/v1/products/updateProductsById/${productId}`
    );
    dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_UPDATE_FAIL, payload: error.message });
  }
};

//###################################################

export const deleteProductAction = (productId) => async (dispatch) => {
  dispatch({
    type: PRODUCT_DELETE_REQUEST,
    payload: productId,
  });

  try {
    const data = await Axios.get(
      `/fashion5/api/v1/products/deleteProductsById/${productId}`
    );
    dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_DELETE_FAIL, payload: error.message });
  }
};
