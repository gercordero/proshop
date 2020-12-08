import {
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_RESET,
} from "../../constants/userConstants";

const userUpdateProfileReducer = (state = { userInfo: null }, action) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return { loading: true };

    case USER_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };

    case USER_UPDATE_PROFILE_FAIL:
      return { loading: true, error: action.payload };

    case USER_UPDATE_PROFILE_RESET:
      return { userInfo: null };

    default:
      return state;
  }
};

export default userUpdateProfileReducer;
