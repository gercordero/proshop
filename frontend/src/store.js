import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// Middlewares
import thunk from "redux-thunk";
// Product reducers
import {
  productListReducer,
  productSingleReducer,
  productReviewCreateReducer,
  productTopRatedReducer,
} from "./reducers/productReducers";
// Cart reducers
import { cartReducer } from "./reducers/cartReducers";
// User reducers
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
} from "./reducers/userReducers";
// Order reducers
import {
  orderCreateReducer,
  orderGetReducer,
  orderMyListReducer,
  orderPayReducer,
  orderListReducer,
  orderDeliverReducer,
} from "./reducers/orderReducers";

// All reducers
const reducer = combineReducers({
  productList: productListReducer,
  productSingle: productSingleReducer,
  productTopRated: productTopRatedReducer,
  productReviewCreate: productReviewCreateReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  orderCreate: orderCreateReducer,
  orderGet: orderGetReducer,
  orderPay: orderPayReducer,
  orderMyList: orderMyListReducer,
  orderList: orderListReducer,
  orderDeliver: orderDeliverReducer,
});

// Geting cart items from local store
const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

// Geting shipping address from local store
const shippingAddressFromLocalStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : [];

// Geting payment method from local store
const paymentMethodFromLocalStorage = localStorage.getItem("paymentMethod")
  ? JSON.parse(localStorage.getItem("paymentMethod"))
  : "";

// Getting logged in user info from local storage
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

// Initial state
const initialState = {
  cart: {
    cartItems: cartItemsFromLocalStorage,
    shippingAddress: shippingAddressFromLocalStorage,
    paymentMethod: paymentMethodFromLocalStorage,
  },
  userLogin: { userInfo: userInfoFromLocalStorage },
};

// ALl middlewares
const middleware = [thunk];

// Create store
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
