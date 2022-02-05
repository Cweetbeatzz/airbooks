import Axios from "axios";
import {
  DELETE_USER_ACCOUNT,
  GET_ALL_USER_ACCOUNT,
  GET_USER_BY_ID_ACCOUNT,
  REGISTER_USER_ACCOUNT,
  UPDATE_USER_ACCOUNT,
  USER_REQUEST,
  USER_REQUEST_FAIL,
} from "../constants/usersConstants";

//###################################################

export const getAllCategoriesAction = () => async (dispatch) => {
  //###
  dispatch({
    type: USER_REQUEST,
  });
  //###
  try {
    const { data } = Axios.get("/fashion5/api/v1/users/getAllUsers");
    dispatch({
      type: GET_ALL_USER_ACCOUNT,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_REQUEST_FAIL,
      payload: error.message,
    });
  }
};
//###################################################

export const getCategoryByIdAction = (userId) => async (dispatch) => {
  //###
  dispatch({
    type: USER_REQUEST,
  });
  //###
  try {
    const { data } = Axios.get(`/fashion5/api/v1/users/getUsersById/${userId}`);
    dispatch({
      type: GET_USER_BY_ID_ACCOUNT,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_REQUEST_FAIL,
      payload: error.message,
    });
  }
};

//###################################################

export const createCategoryAction = () => async (dispatch) => {
  //###
  dispatch({
    type: USER_REQUEST,
  });
  //###
  try {
    const { data } = Axios.post(`/fashion5/api/v1/users/createUsers`);
    dispatch({
      type: REGISTER_USER_ACCOUNT,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_REQUEST_FAIL,
      payload: error.message,
    });
  }
};

//#######################################################

export const updateCategoryAction = (userId) => async (dispatch) => {
  //###
  dispatch({
    type: USER_REQUEST,
  });
  //###
  try {
    const { data } = Axios.post(
      `/fashion5/api/v1/users/updateUsersById/${userId}`
    );
    dispatch({
      type: UPDATE_USER_ACCOUNT,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_REQUEST_FAIL,
      payload: error.message,
    });
  }
};

//#######################################################

export const deleteCategoryAction = (userId) => async (dispatch) => {
  //###
  dispatch({
    type: USER_REQUEST,
  });
  //###
  try {
    const { data } = Axios.post(
      `/fashion5/api/v1/users/deleteUsersById/${userId}`
    );
    dispatch({
      type: DELETE_USER_ACCOUNT,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_REQUEST_FAIL,
      payload: error.message,
    });
  }
};

//#######################################################
