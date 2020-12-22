import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "../../constants/productConstants";

const url = `${process.env.REACT_APP_BACKEND_URL}/api/products`;

// Get products list
const listProducts = (keyword = "", pageNumber = "") => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data: products } = await axios.get(
      `${url}?keyword=${keyword}&pageNumber=${pageNumber}`
    );

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: products });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export default listProducts;
