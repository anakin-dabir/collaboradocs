import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  request: [],
};

const requestSlice = createSlice({
  name: "request",
  initialState,
  reducers: {
    setRequest: (state, action) => {
      state.request = action.payload;
    },
  },
});

export const { setRequest } = requestSlice.actions;

export default requestSlice.reducer;
