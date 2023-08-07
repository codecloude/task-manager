import { configureStore } from "@reduxjs/toolkit";
import themeModeReducer from "./features/theme-mode-slice";

export const store = configureStore({
    reducer: {
        themeModeReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispathch = ReturnType<typeof store.dispatch>;
