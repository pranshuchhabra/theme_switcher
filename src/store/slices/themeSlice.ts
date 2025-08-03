import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type ThemeType = "theme1" | "theme2" | "theme3";

interface ThemeState {
  theme: ThemeType;
}

const initialState: ThemeState = {
  theme: (localStorage.getItem("theme") as ThemeType) || "theme1",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeInStorage: (state, action: PayloadAction<ThemeType>) => {
      state.theme = action.payload;
      localStorage.setItem("theme", action.payload);
    },
  },
});

export const { setThemeInStorage } = themeSlice.actions;
export default themeSlice.reducer;
