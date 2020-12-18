import {
  ORDER_GET_REQUEST,
  ORDER_GET_SUCCESS,
  ORDER_GET_FAIL,
} from "../../constants/orderConstants";

const orderGetReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case ORDER_GET_REQUEST:
      return { loading: true };

    case ORDER_GET_SUCCESS:
      return { loading: false, order: action.payload };

    case ORDER_GET_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export default orderGetReducer;
