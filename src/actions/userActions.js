import Axios from "axios";
import {
  GET_ALL_USER_ACCOUNT,
  GET_USER_BY_ID_ACCOUNT,
  USER_REQUEST,
  USER_REQUEST_FAIL,
} from "../constants/usersConstants";

//###################################################

export const getAllUserAccountsAction = () => async (dispatch) => {
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

export const getUserByIdAction = (userId) => async (dispatch) => {
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

export const createUserAccountAction = () => async (dispatch) => {};
export const updateUserAccountAction = () => async (dispatch) => {};
export const deleteUserAccountAction = () => async (dispatch) => {};
export const loginUserAction = () => async (dispatch) => {};
export const loginOutUserAction = () => async (dispatch) => {};
