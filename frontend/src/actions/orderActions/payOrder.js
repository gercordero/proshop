// Axios to fetch from api
import axios from "axios";
// Order constants
import {
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
} from "../../constants/orderConstants";

// API URL
const url = `${process.env.REACT_APP_BACKEND_URL}/api/orders`;

const payOrder = (orderId, paymentResult) => async (dispatch, getState) => {
  try {
    // Dispatch pay order request
    dispatch({ type: ORDER_PAY_REQUEST });

    // Pay user info from Login redux state
    const {
      userLogin: { userInfo },
    } = getState();

    // Set config var for private pay request
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    // Send a put request to update order details
    const { data: order } = await axios.put(
      url + "/" + orderId + "/pay",
      paymentResult,
      config
    );

    // Dispatch if pay success
    dispatch({ type: ORDER_PAY_SUCCESS, payload: order });
  } catch (error) {
    dispatch({
      type: ORDER_PAY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export default payOrder;
