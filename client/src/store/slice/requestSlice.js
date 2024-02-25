import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  goingToAdmin: [],
  goingFromAdmin: [],
};

const requestSlice = createSlice({
  name: "request",
  initialState,
  reducers: {
    setRequestGoingToAdmin: (state, action) => {
      state.goingToAdmin = action.payload;
    },
    setRequestGoingFromAdmin: (state, action) => {
      state.goingFromAdmin = action.payload;
    },
  },
});

export const { setRequestGoingToAdmin, setRequestGoingFromAdmin } = requestSlice.actions;

export default requestSlice.reducer;
