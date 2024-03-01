import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  document: [],
  change: [],
};

const docSlice = createSlice({
  name: "doc",
  initialState,
  reducers: {
    setDoc: (state, action) => {
      state.document = action.payload;
    },
    setChange: (state, action) => {
      state.change = action.payload;
    },
  },
});

export const { setDoc, setChange } = docSlice.actions;

export default docSlice.reducer;
