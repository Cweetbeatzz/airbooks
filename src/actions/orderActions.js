import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_RESET,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
} from "../constants/orderConstants";
import Axios from "axios";
import { CART_EMPTY } from "../constants/cartConstants";

//####################################################################################

export const createOrderAction = (order) => async (dispatch, getState) => {
  dispatch({
    type: ORDER_CREATE_REQUEST,
    payload: order,
  });

  try {
    const { data } = await Axios.post(
      "/fashion5/api/v1/orders/createOrder/",
      order
    );
    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data,
    });
    //EMPTY THE ORDER LIST
    dispatch({
      type: CART_EMPTY,
    });

    localStorage.removeItem("cartItems");
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//####################################################################################

export const getOrderDetailsByIdAction =
  (orderId) => async (dispatch, getState) => {
    dispatch({
      type: ORDER_DETAILS_REQUEST,
      payload: orderId,
    });
    //
    try {
      const { data } = await Axios.get(
        `/fashion5/api/v1/orders/OrderById/${orderId}`
      );
      //
      dispatch({
        type: ORDER_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      //
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      //
      dispatch({
        type: ORDER_DETAILS_FAIL,
        payload: message,
      });
    }
  };
