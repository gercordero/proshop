import axios from "axios";
import {
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_TOP_FAIL,
} from "../../constants/productConstants";

const url = `${process.env.REACT_APP_BACKEND_URL}/api/products/toprated`;

const topProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_TOP_REQUEST });

    const { data: products } = await axios.get(url);

    dispatch({ type: PRODUCT_TOP_SUCCESS, payload: products });
  } catch (error) {
    dispatch({
      type: PRODUCT_TOP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export default topProducts;
