import {
  ROLE_CREATE_FAIL,
  ROLE_CREATE_REQUEST,
  ROLE_CREATE_SUCCESS,
  ROLE_DELETE_FAIL,
  ROLE_DELETE_REQUEST,
  ROLE_DELETE_SUCCESS,
  ROLE_DETAILS_FAIL,
  ROLE_DETAILS_REQUEST,
  ROLE_DETAILS_SUCCESS,
  ROLE_LIST_FAIL,
  ROLE_LIST_REQUEST,
  ROLE_LIST_SUCCESS,
  ROLE_UPDATE_FAIL,
  ROLE_UPDATE_REQUEST,
  ROLE_UPDATE_SUCCESS,
} from "../constants/rolesConstants";
import Axios from "axios";

//###################################################

export const roleListAction = () => async (dispatch) => {
  dispatch({
    type: ROLE_LIST_REQUEST,
  });

  try {
    const { data } = await Axios.get("/fashion5/api/v1/roles/getAllRoles");
    dispatch({ type: ROLE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ROLE_LIST_FAIL, payload: error.message });
  }
};

//###################################################

export const roleDetailsAction = (id) => async (dispatch) => {
  dispatch({
    type: ROLE_DETAILS_REQUEST,
    payload: id,
  });
  try {
    const { data } = await Axios.get(
      `/fashion5/api/v1/roles/getRolesById/${id}`
    );
    dispatch({ type: ROLE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ROLE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//###################################################

export const createRoleAction = (roleName) => async (dispatch) => {
  dispatch({
    type: ROLE_CREATE_REQUEST,
    payload: {
      roleName,
    },
  });

  try {
    const { data } = await Axios.post("/fashion5/api/v1/roles/createRole", {
      roleName,
    });
    dispatch({ type: ROLE_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ROLE_CREATE_FAIL, payload: error.message });
  }
};

//###################################################

export const updateRoleAction = (roleId) => async (dispatch) => {
  dispatch({
    type: ROLE_UPDATE_REQUEST,
    payload: roleId,
  });

  try {
    const { data } = await Axios.put(
      `/fashion5/api/v1/roles/updateRolesById/${roleId}`
    );
    dispatch({ type: ROLE_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ROLE_UPDATE_FAIL, payload: error.message });
  }
};

//###################################################

export const deleteRoleAction = (roleId) => async (dispatch) => {
  dispatch({
    type: ROLE_DELETE_REQUEST,
    payload: roleId,
  });

  try {
    const { data } = await Axios.delete(
      `/fashion5/api/v1/roles/deleteRolesById/${roleId}`
    );
    dispatch({ type: ROLE_DELETE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ROLE_DELETE_FAIL, payload: error.message });
  }
};
