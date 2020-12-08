import axios from "axios";
import {
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
} from "../../constants/userConstants";

// API URL
const url = `${process.env.REACT_APP_BACKEND_URL}/api/users`;

const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    // Dispatch get user details request
    dispatch({ type: USER_DETAILS_REQUEST });

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
    const { data: user } = await axios(url + "/" + id, config);

    // Dispatch if succes register
    dispatch({ type: USER_DETAILS_SUCCESS, payload: user });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export default getUserDetails;
