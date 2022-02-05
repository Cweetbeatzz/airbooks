import {
  GET_ALL_USER_ACCOUNT,
  USER_REQUEST,
  USER_REQUEST_FAIL,
} from "../constants/usersConstants";

export const userListReducer = (
  state = { loading: true, users: [] },
  action
) => {};
export const userByIdReducer = (state, action) => {
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
export const createUserReducer = (state, action) => {};
export const updateUserReducer = (state, action) => {};
export const deleteUserReducer = (state, action) => {};
