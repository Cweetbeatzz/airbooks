import Axios from "axios";
import {
  USER_CREATE_FAIL,
  USER_CREATE_REQUEST,
  USER_CREATE_SUCCESS,
  USER_DELETE_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_UPDATE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
} from "../constants/usersConstants";

//###################################################

export const getAllUserAccountsAction = () => async (dispatch) => {
  //###
  dispatch({
    type: USER_LIST_REQUEST,
  });
  //###
  try {
    const { data } = await Axios.get("/fashion5/api/v1/users/getAllUsers");
    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
//###################################################

export const getUserByIdAction = (userId) => async (dispatch) => {
  //###
  dispatch({
    type: USER_DETAILS_REQUEST,
    payload: userId,
  });
  //###
  try {
    const { data } = await Axios.get(
      `/fashion5/api/v1/users/getUsersById/${userId}`
    );
    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//###################################################

export const createUserAccountAction =
  (
    firstname,
    lastname,
    username,
    email,
    address,
    phone,
    state,
    country,
    postcode,
    password,
    history
  ) =>
  async (dispatch) => {
    //###
    dispatch({
      type: USER_CREATE_REQUEST,
      payload: {
        firstname,
        lastname,
        username,
        email,
        address,
        phone,
        state,
        country,
        postcode,
        password,
      },
    });
    //###
    try {
      const { data } = await Axios.post(`/fashion5/api/v1/users/createUsers`, {
        firstname,
        lastname,
        username,
        email,
        address,
        phone,
        state,
        country,
        postcode,
        password,
      });
      dispatch({
        type: USER_CREATE_SUCCESS,
        payload: data,
      });
      //to automatically login user if reg is successful
      dispatch({
        type: USER_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

//#######################################################

export const updateUserAccountAction = (userId) => async (dispatch) => {
  //###
  dispatch({
    type: USER_UPDATE_REQUEST,
    payload: userId,
  });
  //###
  try {
    const { data } = await Axios.post(
      `/fashion5/api/v1/users/updateUsersById/${userId}`
    );
    dispatch({
      type: USER_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//#######################################################

export const deleteUserAccountAction = (userId) => async (dispatch) => {
  //###
  dispatch({
    type: USER_DELETE_REQUEST,
    payload: userId,
  });
  //###
  try {
    const { data } = await Axios.post(
      `/fashion5/api/v1/users/deleteUsersById/${userId}`
    );
    dispatch({
      type: USER_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//#######################################################

export const loginUserAction =
  (email, password, history) => async (dispatch) => {
    //###
    dispatch({
      type: USER_LOGIN_REQUEST,
      payload: { email, password },
    });
    //###
    try {
      const { data } = await Axios.post(`/fashion5/api/v1/auth/login`, {
        email,
        password,
      });
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });
      //save user info in web browser storage
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

//#######################################################

export const loginOutUserAction = () => async (dispatch) => {
  //
  localStorage.removeItem("userInfo");

  dispatch({
    type: USER_LOGOUT,
  });
};
