import axios from "axios";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from "../../constants/userConstants";

const url = `${process.env.REACT_APP_BACKEND_URL}/api/users/login`;

//Login user action
const loginUser = (email, password) => async (dispatch) => {
  try {
    // Dispatch login request
    dispatch({ type: USER_LOGIN_REQUEST });

    // Set config var for post request
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    //Data to post
    const postData = { email, password };

    // Send post request for login the user
    const { data: user } = await axios.post(url, postData, config);

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

export default loginUser;
