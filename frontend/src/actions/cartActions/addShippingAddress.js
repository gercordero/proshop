import { CART_ADD_SHIPPING_ADDRESS } from "../../constants/cartConstants";

const addShippingAddress = (addressData) => (dispatch) => {
  dispatch({
    type: CART_ADD_SHIPPING_ADDRESS,
    payload: addressData,
  });

  // Save address data to local storage
  localStorage.setItem("shippingAddress", JSON.stringify(addressData));
};

export default addShippingAddress;
