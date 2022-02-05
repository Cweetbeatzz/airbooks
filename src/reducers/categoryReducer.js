import {
  DELETE_USER_ACCOUNT,
  GET_ALL_USER_ACCOUNT,
  GET_USER_BY_ID_ACCOUNT,
  REGISTER_USER_ACCOUNT,
  UPDATE_USER_ACCOUNT,
  USER_REQUEST,
  USER_REQUEST_FAIL,
} from "../constants/usersConstants";

//##################################################################

export const CategoryListReducer = (
  state = { loading: true, users: [] },
  action
) => {
  switch (action.type) {
    case USER_REQUEST:
      return { loading: true };
    case GET_ALL_USER_ACCOUNT:
      return { loading: false, payload: action.payload };
    case USER_REQUEST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//##################################################################

export const CategoryByIdReducer = (
  state = { loading: true, users: {} },
  action
) => {
  switch (action.type) {
    case USER_REQUEST:
      return { loading: true };
    case GET_USER_BY_ID_ACCOUNT:
      return { loading: false, payload: action.payload };
    case USER_REQUEST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//##################################################################

export const createCategoryReducer = (state, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return { loading: true };
    case REGISTER_USER_ACCOUNT:
      return { loading: false, payload: action.payload };
    case USER_REQUEST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//##################################################################

export const updateCategoryReducer = (state, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return { loading: true };
    case UPDATE_USER_ACCOUNT:
      return { loading: false, payload: action.payload };
    case USER_REQUEST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//##################################################################

export const deleteCategoryReducer = (state, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return { loading: true };
    case DELETE_USER_ACCOUNT:
      return { loading: false, payload: action.payload };
    case USER_REQUEST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//##################################################################
