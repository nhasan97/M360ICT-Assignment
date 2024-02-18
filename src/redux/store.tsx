import { configureStore } from "@reduxjs/toolkit";
import { usersAPI } from "../api/usersAPI";
import authReducer from "./slices/AuthSlice";

export const store = configureStore({
  reducer: {
    [usersAPI.reducerPath]: usersAPI.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersAPI.middleware),
});
