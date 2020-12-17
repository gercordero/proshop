// Axios to fetch from api
import axios from "axios";
// Order constants
import {
  ORDER_GET_REQUEST,
  ORDER_GET_SUCCESS,
  ORDER_GET_FAIL,
} from "../../constants/orderConstants";

// API URL
const url = `${process.env.REACT_APP_BACKEND_URL}/api/orders`;

const getOrder = (id) => async (dispatch, getState) => {
  try {
    // Dispatch get order request
    dispatch({ type: ORDER_GET_REQUEST });

    // Get user info from Login redux state
    const {
      userLogin: { userInfo },
    } = getState();

    // Set config var for private get request
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    // Send a get request to get order details
    const { data: order } = await axios(url + "/" + id, config);

    // Dispatch if get success
    dispatch({ type: ORDER_GET_SUCCESS, payload: order });
  } catch (error) {
    dispatch({
      type: ORDER_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export default getOrder;
