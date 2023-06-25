import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import fetchReducer from "./../features/fetchSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    fetchedData: fetchReducer,
  },
});
