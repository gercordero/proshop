import axios from "axios";
// Constants
import {
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
} from "../../constants/productConstants";

// API URL
const url = `${process.env.REACT_APP_BACKEND_URL}/api/products`;

const createProductReview = (id, review) => async (dispatch, getState) => {
  try {
    // Dispatch post create product review request
    dispatch({ type: PRODUCT_CREATE_REVIEW_REQUEST });

    // Get user info from Login redux state
    const {
      userLogin: { userInfo },
    } = getState();

    // Set config var for private post request
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    // Send a post request to create a new product review
    await axios.post(url + "/" + id + "/reviews", review, config);

    // Dispatch if post success
    dispatch({ type: PRODUCT_CREATE_REVIEW_SUCCESS });
  } catch (error) {
    dispatch({
      type: PRODUCT_CREATE_REVIEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export default createProductReview;
