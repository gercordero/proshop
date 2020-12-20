import axios from "axios";
import {
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
} from "../../constants/userConstants";

// API URL
const url = `${process.env.REACT_APP_BACKEND_URL}/api/users`;

const deleteUser = (userID) => async (dispatch, getState) => {
  try {
    // Dispatch get user details request
    dispatch({ type: USER_DELETE_REQUEST });

    // Get user info from Login redux state
    const {
      userLogin: { userInfo },
    } = getState();

    // Set config var for get request
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    // Send a get request to get user profile details
    await axios.delete(url + "/" + userID, config);

    // Dispatch if succes get user profile
    dispatch({ type: USER_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: USER_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export default deleteUser;
