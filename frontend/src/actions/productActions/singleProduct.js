import axios from "axios";
import {
  PRODUCT_SINGLE_REQUEST,
  PRODUCT_SINGLE_SUCCESS,
  PRODUCT_SINGLE_FAIL,
} from "../../constants/productConstants";

const url = `${process.env.REACT_APP_BACKEND_URL}/api/products`;

// Get single product
const singleProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_SINGLE_REQUEST });

    const { data: products } = await axios.get(url + "/" + id);

    dispatch({ type: PRODUCT_SINGLE_SUCCESS, payload: products });
  } catch (error) {
    dispatch({
      type: PRODUCT_SINGLE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export default singleProduct;
