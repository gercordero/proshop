import {
  SINGLE_PRODUCT_REQUEST,
  SINGLE_PRODUCT_SUCCESS,
  SINGLE_PRODUCT_FAIL,
} from "../../constants/productConstants";

const singleProductReducer = (
  state = { loading: true, product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case SINGLE_PRODUCT_REQUEST:
      return { loading: true, product: {} };
    case SINGLE_PRODUCT_SUCCESS:
      return { loading: false, product: action.payload };
    case SINGLE_PRODUCT_FAIL:
      return { loading: false, product: action.payload };

    default:
      return state;
  }
};

export default singleProductReducer;
