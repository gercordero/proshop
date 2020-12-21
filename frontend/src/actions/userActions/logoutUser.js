import {
  USER_LOGOUT,
  USER_DETAILS_RESET,
  USER_LIST_RESET,
} from "../../constants/userConstants";
import {
  ORDER_MY_LIST_RESET,
  ORDER_LIST_RESET,
} from "../../constants/orderConstants";

// Logout use action
const logoutUser = () => (dispatch, getState) => {
  // Remove userInfo from localStorage
  localStorage.removeItem("userInfo");

  // GET USER INFO TO KNOW IF USER IS ADMIN
  const {
    userLogin: { userInfo },
  } = getState();

  // Dispatch actions for admins only
  if (userInfo.isAdmin) {
    dispatch({ type: USER_LIST_RESET });
    dispatch({ type: ORDER_LIST_RESET });
  }
  // Dispatch actions for all users
  dispatch({ type: USER_DETAILS_RESET });
  dispatch({ type: ORDER_MY_LIST_RESET });
  dispatch({ type: USER_LOGOUT });
};

export default logoutUser;
