import { CART_ADD_PAYMENT_METHOD } from "../../constants/cartConstants";

const addPaymentMethod = (paymentMethod) => (dispatch) => {
  dispatch({ type: CART_ADD_PAYMENT_METHOD, payload: paymentMethod });

  localStorage.setItem("paymentMethod", JSON.stringify(paymentMethod));
};

export default addPaymentMethod;
