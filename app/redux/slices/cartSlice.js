import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  loading: false,
  cartItems: Cookies.get("cart")
    ? JSON.parse(Cookies.get("cart")).cartItems
    : [],
  itemsPrice: Cookies.get("cart")
    ? JSON.parse(Cookies.get("cart")).itemsPrice
    : 0,
  shippingPrice: Cookies.get("cart")
    ? JSON.parse(Cookies.get("cart")).shippingPrice
    : 0,
  totalPrice: Cookies.get("cart")
    ? JSON.parse(Cookies.get("cart")).totalPrice
    : 0,
};

const serializeCartState = (state) => ({
  cartItems: state.cartItems,
  itemsPrice: state.itemsPrice,
  shippingPrice: state.shippingPrice,
  totalPrice: state.totalPrice,
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log("🚀 ~ action:", action);
      const item = action.payload;
      console.log("🚀 ~ item:", item);
      const existItem = state.cartItems?.find((x) => x.id === item.id);
      if (!existItem) state.cartItems.push(action.payload);
      else {
        state.cartItems = state.cartItems.map((x) =>
          x.id === item.id ? item : x
        );
      }
      state.itemsPrice = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      state.shippingPrice = state.itemsPrice > 100 ? 0 : 50;
      state.totalPrice = (state.itemsPrice + state.shippingPrice).toFixed(2);
      console.log("🚀 ~ state:", state.cartItems);
      Cookies.set("cart", JSON.stringify(serializeCartState(state)));
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.itemsPrice = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      state.shippingPrice = state.itemsPrice > 100 ? 0 : 50;
      state.totalPrice = (state.itemsPrice + state.shippingPrice).toFixed(2);
      Cookies.set("cart", JSON.stringify(serializeCartState(state)));
    },
    hideLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { addToCart, removeFromCart, hideLoading } = cartSlice.actions;

export default cartSlice.reducer;
