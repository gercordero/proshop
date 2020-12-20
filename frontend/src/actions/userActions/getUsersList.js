import axios from "axios";
import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
} from "../../constants/userConstants";

// API URL
const url = `${process.env.REACT_APP_BACKEND_URL}/api/users`;

const getUsersList = () => async (dispatch, getState) => {
  try {
    // Dispatch get users list request
    dispatch({ type: USER_LIST_REQUEST });

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

    // Send a get request to get users list
    const { data: users } = await axios(url, config);

    // Dispatch if succes get all users
    dispatch({ type: USER_LIST_SUCCESS, payload: users });
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export default getUsersList;
