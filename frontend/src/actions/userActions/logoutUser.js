import {
  USER_LOGOUT,
  USER_DETAILS_RESET,
  USER_LIST_RESET,
} from "../../constants/userConstants";
import { ORDER_MY_LIST_REST } from "../../constants/orderConstants";

// Logout use action
const logoutUser = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_DETAILS_RESET });
  dispatch({ type: ORDER_MY_LIST_REST });
  dispatch({ type: USER_LIST_RESET });
  dispatch({ type: USER_LOGOUT });
};

export default logoutUser;
