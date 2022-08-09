import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user";
import { cartReducer } from "./cart";

const reducers = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default configureStore({
  reducer: reducers,
});
