import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  productListReducer,
  singleProductReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducer";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducer";

// All reducers
const reducer = combineReducers({
  productList: productListReducer,
  singleProduct: singleProductReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});

// Geting cart items from local store
const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

// Getting logged in user info from local storage
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

// Initial state
const initialState = {
  cart: { cartItems: cartItemsFromLocalStorage },
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
