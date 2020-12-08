import axios from "axios";
import {
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_LOGIN_SUCCESS,
} from "../../constants/userConstants";

// API URL
const url = `${process.env.REACT_APP_BACKEND_URL}/api/users/profile`;

const updateUser = (updatedUser) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_UPDATE_PROFILE_REQUEST });

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

    // Send put request for updating an User profile
    const { data: user } = await axios.put(url, updatedUser, config);

    // Dispatch if succes update
    dispatch({ type: USER_UPDATE_PROFILE_SUCCESS, payload: user });

    // Dispatch login again for updating changed fields
    dispatch({ type: USER_LOGIN_SUCCESS, payload: user });

    // Update changes on local storage
    localStorage.setItem("userInfo", JSON.stringify(user));
  } catch (error) {
    dispatch({
      type: USER_UPDATE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export default updateUser;
