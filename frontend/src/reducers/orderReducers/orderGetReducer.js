import {
  ORDER_GET_REQUEST,
  ORDER_GET_SUCCESS,
  ORDER_GET_FAIL,
} from "../../constants/orderConstants";

const orderGetReducer = (
  state = { loading: true, orderItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case ORDER_GET_REQUEST:
      return { ...state, loading: true };

    case ORDER_GET_SUCCESS:
      return { ...state, loading: false, order: action.payload };

    case ORDER_GET_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default orderGetReducer;
