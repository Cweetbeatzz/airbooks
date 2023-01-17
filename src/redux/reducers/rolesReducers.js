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

//##################################################################

const initialState = {
  loading: true,
  roles: [],
};
//##################################################################

export const RoleListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ROLE_LIST_REQUEST:
      return { loading: true };
    case ROLE_LIST_SUCCESS:
      return { loading: false, roles: action.payload };
    case ROLE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//##################################################################

export const RoleDetailsReducer = (
  state = { roles: {}, loading: true },
  action
) => {
  switch (action.type) {
    case ROLE_DETAILS_REQUEST:
      return { loading: true };
    case ROLE_DETAILS_SUCCESS:
      return { loading: false, roles: action.payload };
    case ROLE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//##################################################################

export const createRoleReducer = (state = {}, action) => {
  switch (action.type) {
    case ROLE_CREATE_REQUEST:
      return { loading: true };
    case ROLE_CREATE_SUCCESS:
      return { loading: false, roles: action.payload };
    case ROLE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//##################################################################

export const updateRoleReducer = (state = {}, action) => {
  switch (action.type) {
    case ROLE_UPDATE_REQUEST:
      return { loading: true };
    case ROLE_UPDATE_SUCCESS:
      return { loading: false, payload: action.payload };
    case ROLE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//##################################################################

export const deleteRoleReducer = (state = { deleteRole: {} }, action) => {
  switch (action.type) {
    case ROLE_DELETE_REQUEST:
      return { loading: true };
    case ROLE_DELETE_SUCCESS:
      return { loading: false, roles: action.payload };
    case ROLE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//##################################################################
