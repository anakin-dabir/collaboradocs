import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import nodeApi from "../services/nodeApi";
import authSlice from "./slice/authSlice";
import socketSlice from "./slice/socketSlice";
import welcomeSlice from "./slice/welcomeSlice";
import documentSlice from "./slice/documentSlice";
import projectSlice from "./slice/projectSlice";
import requestSlice from "./slice/requestSlice";

const rootReducer = combineReducers({
  [nodeApi.reducerPath]: nodeApi.reducer,
  user: authSlice,
  socket: socketSlice,
  welcome: welcomeSlice,
  document: documentSlice,
  project: projectSlice,
  request: requestSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "welcome", "document", "project"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(nodeApi.middleware),
});

export const persistor = persistStore(store);

export default store;
