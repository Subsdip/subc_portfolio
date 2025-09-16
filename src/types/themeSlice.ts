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
    setDarkTheme: (state) => {
      state.dark = true;
    },
    setLightTheme: (state) => {
      state.dark = false;
    },
  },
});

export const { toggleTheme, setDarkTheme, setLightTheme } = themeSlice.actions;
export default themeSlice.reducer;
