import { CART_RESET } from "../../constants/cartConstants";

const resetCart = () => (dispatch) => {
  localStorage.removeItem("cartItems");
  dispatch({ type: CART_RESET });
};

export default resetCart;
