const { createSlice } = require("@reduxjs/toolkit");
import Cookies from "js-cookie";

const initialState = {
  currentRoute: "/",
};

const routingSlice = createSlice({
  name: "routing",
  initialState,
  reducers: {
    setCurrentRoute: (state, action) => {
      state.currentRoute = action.payload;
      Cookies.set("currentRoute", action.payload);
    },
  },
});

export const { setCurrentRoute } = routingSlice.actions;
export default routingSlice.reducer;
