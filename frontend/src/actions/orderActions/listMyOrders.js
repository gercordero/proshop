// Axios to fetch from api
import axios from "axios";
// Order constants
import {
  ORDER_MY_LIST_REQUEST,
  ORDER_MY_LIST_SUCCESS,
  ORDER_MY_LIST_FAIL,
} from "../../constants/orderConstants";

// API URL
const url = `${process.env.REACT_APP_BACKEND_URL}/api/orders/myorders`;

const payOrder = () => async (dispatch, getState) => {
  try {
    // Dispatch get my orders request
    dispatch({ type: ORDER_MY_LIST_REQUEST });

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

    // Send a get request to get user orders
    const { data: orders } = await axios.get(url, config);

    // Dispatch if pay success
    dispatch({ type: ORDER_MY_LIST_SUCCESS, payload: orders });
  } catch (error) {
    dispatch({
      type: ORDER_MY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export default payOrder;
