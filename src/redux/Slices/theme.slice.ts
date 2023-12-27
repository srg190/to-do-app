import { createSlice } from "@reduxjs/toolkit";

interface Theme {
  mode: "dark" | "light";
}

const initialState = {
  mode: "dark",
} as Theme;

const themeModeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    togleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const themeAction = themeModeSlice.actions;
export default themeModeSlice.reducer;