import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import nodeApi from "../services/nodeApi";
import authSlice from "./slice/authSlice";
import socketSlice from "./slice/socketSlice";

const rootReducer = combineReducers({
  [nodeApi.reducerPath]: nodeApi.reducer,
  user: authSlice,
  socket: socketSlice,
  //   theme: themeSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
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
