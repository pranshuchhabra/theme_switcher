import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import themeSlice from "./slices/themeSlice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    theme: themeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
