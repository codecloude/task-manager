import { PaletteMode } from "@mui/material";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// const initialMode = localStorage.getItem("mode");
const initialState = "light" as PaletteMode | undefined;

export const themeMode = createSlice({
    name: "theme",
    initialState,
    reducers: {
        switchTheme: (state, action: PayloadAction<PaletteMode>) => {
            return action.payload;
        },
    },
});

export const { switchTheme } = themeMode.actions;
export default themeMode.reducer;
