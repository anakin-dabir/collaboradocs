import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initiated: false,
};

const welcomeSlice = createSlice({
  name: "welcome",
  initialState,
  reducers: {
    setInitiated: (state, action) => {
      state.initiated = true;
    },
  },
});

export const { setInitiated } = welcomeSlice.actions;

export default welcomeSlice.reducer;
