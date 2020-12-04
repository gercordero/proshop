import axios from "axios";
import { CART_ADD_ITEM } from "../../constants/cartConstants";

const url = `${process.env.REACT_APP_BACKEND_URL}/api/products`;

const addToCart = (id, quantity) => async (dispatch, getState) => {
  // Fetch data
  const { data } = await axios.get(url + "/" + id);

  const { _id, name, image, price, countInStock } = data;

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: _id,
      name: name,
      image: image,
      price: price,
      countInStock: countInStock,
      quantity,
    },
  });

  // Save cart items to local storage to have a persisting redux state
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export default addToCart;
