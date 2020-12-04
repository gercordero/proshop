import { CART_REMOVE_ITEM } from "../../constants/cartConstants";

const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  // Save cart items to local storage to have a persisting redux state
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export default removeFromCart;
