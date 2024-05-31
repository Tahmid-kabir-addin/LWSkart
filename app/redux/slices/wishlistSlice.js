import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
let initialState = null;

Cookies.get("wishlist")
  ? (initialState = JSON.parse(Cookies.get("wishlist")))
  : (initialState = {
      wishlistItems: [],
      loading: true,
    });

const serializewishlistState = (state) => ({
  wishlistItems: state.wishlistItems,
});

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const item = action.payload;
      const existItem = state.wishlistItems?.find((x) => x.id === item.id);
      if (!existItem) state.wishlistItems.push(action.payload);
      else {
        state.wishlistItems = state.wishlistItems.map((x) =>
          x.id === item.id ? item : x
        );
      }
      Cookies.set("wishlist", JSON.stringify(serializewishlistState(state)));
    },
    removeFromwishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== action.payload.id
      );
      Cookies.set("wishlist", JSON.stringify(serializewishlistState(state)));
    },
    hideLoading: (state) => {
      state.loading = false;
    },
    showLoading: (state) => {
      state.loading = true;
    },
  },
});

export const { addToWishlist, removeFromwishlist, hideLoading, showLoading } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
