import { USER_LOGOUT } from "../../constants/userConstants";

// Logout use action
const logoutUser = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};

export default logoutUser;
