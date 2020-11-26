import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  productListReducer,
  singleProductReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducer";

// All reducers
const reducer = combineReducers({
  productList: productListReducer,
  singleProduct: singleProductReducer,
  cart: cartReducer,
});

// Geting cart items from local store
const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

// Initial state
const initialState = {
  cart: { cartItems: cartItemsFromLocalStorage },
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
