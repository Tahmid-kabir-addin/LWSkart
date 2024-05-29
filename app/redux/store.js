import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import routingReducer from "./slices/routingSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    routing: routingReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
