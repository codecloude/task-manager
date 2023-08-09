import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import themeModeReducer from "./features/theme-mode-slice";
import WorkspacesReducer from "./features/workspaces-slice";

export const store = configureStore({
    reducer: {
        themeModeReducer,
        WorkspacesReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
