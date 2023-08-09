import { WorkspaceType } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// const initialMode = localStorage.getItem("mode");
const initialState: WorkspaceType[] = []

export const workspaces = createSlice({
    name: "workspaces",
    initialState,
    reducers: {
        addWorkspase: (state, action: PayloadAction<WorkspaceType>) => {
            return [
                ...state,
                action.payload
            ];
        },
    },
});

export const { addWorkspase } = workspaces.actions;
export default workspaces.reducer;