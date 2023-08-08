import { configureStore } from "@reduxjs/toolkit";
import themeModeReducer from "./features/theme-mode-slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        themeModeReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
