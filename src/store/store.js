import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";

export const store = configureStore({
  reducer: {
    home: homeSlice,
  },
  devTools: process.env.NODE_ENV !== 'production', // enable Redux DevTools in non-production environment
});

export default store;
