import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  //   theme: themeSlice,
  //   [authApi.reducerPath]: authApi.reducer,
  //   user: authSlice,
});

const persistConfig = {
  key: "root",
  storage,
  //   whitelist: ["theme", "user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(authApi.middleware),
});

export const persistor = persistStore(store);

export default store;
