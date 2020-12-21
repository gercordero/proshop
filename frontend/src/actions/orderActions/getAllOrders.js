// Axios to fetch from api
import axios from "axios";
// Order constants
import {
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,
} from "../../constants/orderConstants";

// API URL
const url = `${process.env.REACT_APP_BACKEND_URL}/api/orders`;

const getAllOrders = () => async (dispatch, getState) => {
  try {
    // Dispatch get orders request
    dispatch({ type: ORDER_LIST_REQUEST });

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

    // Send a get request to get orders details
    const { data: orders } = await axios(url, config);

    // Dispatch if get success
    dispatch({ type: ORDER_LIST_SUCCESS, payload: orders });
  } catch (error) {
    dispatch({
      type: ORDER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export default getAllOrders;
