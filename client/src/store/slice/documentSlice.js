import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  document: [],
};

const documentSlice = createSlice({
  name: "document",
  initialState,
  reducers: {
    setDocument: (state, action) => {
      state.document = action.payload;
    },
  },
});

export const { setDocument, clearUser } = documentSlice.actions;

export default documentSlice.reducer;
