import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  isLogged: false,
  user: null,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isLogged = true;
      state.user = action.payload;
    },
    clearUser: (state) => {
      Cookies.remove("jwt_token");
      return initialState;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
