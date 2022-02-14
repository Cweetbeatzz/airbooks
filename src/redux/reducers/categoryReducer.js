//##################################################################

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

const initialState = {
  loading: true,
  allcategories: [],
};

//##################################################################

export const CategoryListReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_LIST_REQUEST:
      return { loading: true };
    case CATEGORY_LIST_SUCCESS:
      return { loading: false, allcategories: action.payload };
    case CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//##################################################################

export const CategoryByIdReducer = (
  state = { loading: true, category: {} },
  action
) => {
  switch (action.type) {
    case CATEGORY_DETAILS_REQUEST:
      return { loading: true };
    case CATEGORY_DETAILS_SUCCESS:
      return { loading: false, category: action.payload };
    case CATEGORY_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//##################################################################

export const createCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case CATEGORY_CREATE_REQUEST:
      return { loading: true };
    case CATEGORY_CREATE_SUCCESS:
      return { loading: false, category: action.payload };
    case CATEGORY_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//##################################################################

export const updateCategoryReducer = (state = { category: {} }, action) => {
  switch (action.type) {
    case CATEGORY_UPDATE_REQUEST:
      return { loading: true };
    case CATEGORY_UPDATE_SUCCESS:
      return { loading: false, category: action.payload };
    case CATEGORY_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//##################################################################

export const deleteCategoryReducer = (
  state = { category: {}, loading: true },
  action
) => {
  switch (action.type) {
    case CATEGORY_DELETE_REQUEST:
      return { loading: true };
    case CATEGORY_DELETE_SUCCESS:
      return { loading: false, category: action.payload };
    case CATEGORY_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//##################################################################
