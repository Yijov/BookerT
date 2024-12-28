import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { slices } from "../features";

const persistConfig = {
  key: "arasson",
  storage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, combineReducers(slices));
export const CoreStore = configureStore({
  reducer: persistedReducer,
  middleware:(getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }) 
});
export const persistor = persistStore(CoreStore);
