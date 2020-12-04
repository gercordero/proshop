import axios from "axios";
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_SUCCESS,
} from "../../constants/userConstants";

// API URL
const url = `${process.env.REACT_APP_BACKEND_URL}/api/users`;

// Register action
const registerUser = (name, email, password) => async (dispatch) => {
  try {
    // Dispatch register request
    dispatch({ type: USER_REGISTER_REQUEST });

    // Set config var for post request
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Data to post
    const postData = { name, email, password };

    // Send post request for creating an User
    const { data: user } = await axios.post(url, postData, config);

    // Dispatch if succes register
    dispatch({ type: USER_REGISTER_SUCCESS, payload: user });

    // Log the user in automaticly after registration
    dispatch({ type: USER_LOGIN_SUCCESS, payload: user });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export default registerUser;
