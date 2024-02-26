import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  document: [],
  commit: [],
};

const docSlice = createSlice({
  name: "doc",
  initialState,
  reducers: {
    setDoc: (state, action) => {
      state.document = action.payload;
    },
  },
});

export const { setDoc } = docSlice.actions;

export default docSlice.reducer;
