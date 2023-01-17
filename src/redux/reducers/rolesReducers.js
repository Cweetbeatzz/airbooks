import {
  ROLE_CATEGORY_LIST_FAIL,
  ROLE_CATEGORY_LIST_REQUEST,
  ROLE_CATEGORY_LIST_SUCCESS,
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
} from "../constants/productsConstants";

//##################################################################

const initialState = {
  loading: true,
  products: [],
};
//##################################################################

export const ProductListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ROLE_LIST_REQUEST:
      return { loading: true };
    case ROLE_LIST_SUCCESS:
      return { loading: false, product: action.payload };
    case ROLE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//##################################################################

export const ProductListByCategoryReducer = (
  state = { loading: true, products: [] },
  action
) => {
  switch (action.type) {
    case ROLE_CATEGORY_LIST_REQUEST:
      return { loading: true };
    case ROLE_CATEGORY_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case ROLE_CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
//##################################################################

export const ProductDetailsReducer = (
  state = { products: {}, loading: true },
  action
) => {
  switch (action.type) {
    case ROLE_DETAILS_REQUEST:
      return { loading: true };
    case ROLE_DETAILS_SUCCESS:
      return { loading: false, products: action.payload };
    case ROLE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//##################################################################

export const createProductReducer = (state = {}, action) => {
  switch (action.type) {
    case ROLE_CREATE_REQUEST:
      return { loading: true };
    case ROLE_CREATE_SUCCESS:
      return { loading: false, product: action.payload };
    case ROLE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//##################################################################

export const updateProductReducer = (state = {}, action) => {
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

export const deleteProductReducer = (state = { deleteProduct: {} }, action) => {
  switch (action.type) {
    case ROLE_DELETE_REQUEST:
      return { loading: true };
    case ROLE_DELETE_SUCCESS:
      return { loading: false, deleteProduct: action.payload };
    case ROLE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//##################################################################
