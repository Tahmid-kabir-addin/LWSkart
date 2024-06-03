const { createSlice } = require("@reduxjs/toolkit");
const { showLoading } = require("./cartSlice");
import Cookies from "js-cookie";

const initialState = {
  searchQuery: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      Cookies.set("search", JSON.stringify(state.searchQuery));
    },
  },
});

export const { setSearchQuery } = searchSlice.actions;

export default searchSlice.reducer;
