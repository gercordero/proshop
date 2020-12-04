import axios from "axios";
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../constants/userConstants";

const url = `${process.env.REACT_APP_BACKEND_URL}/api/users`;

// Register action
export const registerUser = (name, email, password) => async (dispatch) => {
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

//Login user action
export const loginUser = (email, password) => async (dispatch) => {
  try {
    // Dispatch login request
    dispatch({ type: USER_LOGIN_REQUEST });

    // Set config var for post request
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Send post request for login the user
    const { data: user } = await axios.post(
      `${url}/login`,
      { email, password },
      config
    );

    // Dispatch if succes login
    dispatch({ type: USER_LOGIN_SUCCESS, payload: user });

    // Save loged in user to local store
    localStorage.setItem("userInfo", JSON.stringify(user));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Logout use action
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};
