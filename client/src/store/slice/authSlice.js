import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  isLogged: false,
  user: null,
  notification: [],
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
    setNotification: (state, action) => {
      state.notification = action.payload;
    },
  },
});

export const { setUser, clearUser, setNotification } = authSlice.actions;

export default authSlice.reducer;
