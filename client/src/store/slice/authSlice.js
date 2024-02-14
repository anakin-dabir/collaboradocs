import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
  user: null,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userSet: (state, action) => {
      state.isLogged = true;
      state.user = action.payload;
    },
    userClear: (state) => initialState,
  },
});

export const { userSet, userClear } = authSlice.actions;

export default authSlice.reducer;
