import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
let initialState = null;

Cookies.get("cart")
  ? (initialState = JSON.parse(Cookies.get("cart")))
  : (initialState = {
      cartItems: [],
      itemsPrice: 0,
      shippingPrice: 0,
      totalPrice: 0,
      loading: true,
    });

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
      const item = action.payload;
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
    showLoading: (state) => {
      state.loading = true;
    },
  },
});

export const { addToCart, removeFromCart, hideLoading, showLoading } =
  cartSlice.actions;

export default cartSlice.reducer;
