import axios from "axios";
// Constants
import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
} from "../../constants/orderConstants";

// API URL
const url = `${process.env.REACT_APP_BACKEND_URL}/api/orders`;

const createOrder = (order) => async (dispatch, getState) => {
  try {
    // Dispatch post create order request
    dispatch({ type: ORDER_CREATE_REQUEST });

    // Get user info from Login redux state
    const {
      userLogin: { userInfo },
    } = getState();

    // Set config var for post request
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    // Send a get request to get user profile details
    const { data: user } = await axios.post(url, order, config);

    // Dispatch if post success
    dispatch({ type: ORDER_CREATE_SUCCESS, payload: user });
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

export default createOrder;
