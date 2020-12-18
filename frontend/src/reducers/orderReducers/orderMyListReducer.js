import {
  ORDER_MY_LIST_REQUEST,
  ORDER_MY_LIST_SUCCESS,
  ORDER_MY_LIST_FAIL,
  ORDER_MY_LIST_REST,
} from "../../constants/orderConstants";

const orderMyListReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDER_MY_LIST_REQUEST:
      return { loading: true };

    case ORDER_MY_LIST_SUCCESS:
      return { loading: false, orders: action.payload };

    case ORDER_MY_LIST_FAIL:
      return { loading: false, error: action.payload };

    case ORDER_MY_LIST_REST:
      return { orders: [] };

    default:
      return state;
  }
};

export default orderMyListReducer;
