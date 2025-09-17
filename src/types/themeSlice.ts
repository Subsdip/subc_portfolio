import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  dark: boolean;
}

const initialState: ThemeState = {
  dark: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.dark = !state.dark;
    },
    setDark: (state, action: PayloadAction<boolean>) => {
      state.dark = action.payload;
    },
  },
});

export const { toggleTheme, setDark } = themeSlice.actions;
export default themeSlice.reducer;
