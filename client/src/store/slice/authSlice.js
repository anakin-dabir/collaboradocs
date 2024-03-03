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
    setReadNotification: (state, action) => {
      return {
        ...state,
        notification: state.notification.map((notification) => {
          if (notification._id === action.payload.notificationId) {
            return { ...notification, read: true };
          } else {
            return notification;
          }
        }),
      };
    },
  },
});

export const { setUser, clearUser, setNotification, setReadNotification } = authSlice.actions;

export default authSlice.reducer;
