import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  project: [],
  document: [],
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setProject: (state, action) => {
      state.project = action.payload;
    },
    setProjectDocs: (state, action) => {
      state.document = action.payload;
    },
  },
});

export const { setProject, setProjectDocs } = projectSlice.actions;

export default projectSlice.reducer;
