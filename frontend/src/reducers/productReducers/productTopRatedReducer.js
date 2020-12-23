import {
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_TOP_FAIL,
} from "../../constants/productConstants";

const productTopReducer = (state = { loading: true, products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_TOP_REQUEST:
      return { loading: true, products: [] };

    case PRODUCT_TOP_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };

    case PRODUCT_TOP_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export default productTopReducer;
