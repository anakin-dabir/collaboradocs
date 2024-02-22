import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initiated: false,
  error: false,
};

const welcomeSlice = createSlice({
  name: "welcome",
  initialState,
  reducers: {
    setInitiated: (state, action) => {
      state.initiated = true;
    },
    serRouterError: (state, action) => {
      state.error = action;
    },
  },
});

export const { setInitiated, serRouterError } = welcomeSlice.actions;

export default welcomeSlice.reducer;
