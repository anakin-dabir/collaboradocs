import {createSlice} from "@reduxjs/toolkit";
import {io} from "socket.io-client";
import config from "../../config/config";

const initialState = {
  socket: io(config.SERVER || "http://localhost:5000", {
    autoConnect: false,
  }),
  users: [],
};

const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    setSocket: (state, action) => {
      state.socket = action.payload;
    },
    setUser: (state, action) => {
      state.users = action.payload;
    },
    clearSocket: state => {
      state.socket.disconnect();
    },
  },
});

export const {setSocket, clearSocket, setUser} = socketSlice.actions;

export default socketSlice.reducer;
