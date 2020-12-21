// Axios to fetch from api
import axios from "axios";
// Order constants
import {
  ORDER_DELIVER_REQUEST,
  ORDER_DELIVER_SUCCESS,
  ORDER_DELIVER_FAIL,
} from "../../constants/orderConstants";

// API URL
const url = `${process.env.REACT_APP_BACKEND_URL}/api/orders`;

const deliverOrder = (orderId) => async (dispatch, getState) => {
  try {
    // Dispatch pay order request
    dispatch({ type: ORDER_DELIVER_REQUEST });

    // Get user info from Login redux state
    const {
      userLogin: { userInfo },
    } = getState();

    // Set config var for private put request
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    // Send a put request to update order deliver status
    const { data: order } = await axios.put(
      url + "/" + orderId + "/deliver",
      {},
      config
    );

    // Dispatch if deliver success
    dispatch({ type: ORDER_DELIVER_SUCCESS, payload: order });
  } catch (error) {
    dispatch({
      type: ORDER_DELIVER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export default deliverOrder;
