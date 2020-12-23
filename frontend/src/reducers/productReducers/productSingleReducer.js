import {
  PRODUCT_SINGLE_REQUEST,
  PRODUCT_SINGLE_SUCCESS,
  PRODUCT_SINGLE_FAIL,
} from "../../constants/productConstants";

const productSingleReducer = (
  state = { loading: true, product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_SINGLE_REQUEST:
      return { loading: true, product: {} };
    case PRODUCT_SINGLE_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_SINGLE_FAIL:
      return { loading: false, product: action.payload };

    default:
      return state;
  }
};

export default productSingleReducer;
