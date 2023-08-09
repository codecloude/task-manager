import { WorkspaceType } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// const initialMode = localStorage.getItem("mode");
const initialState: WorkspaceType[] = []

export const workspaces = createSlice({
    name: "workspaces",
    initialState,
    reducers: {
        addWorkspaces: (state, action: PayloadAction<WorkspaceType[]>) => {
            return action.payload;
        },
    },
});

export const { addWorkspaces } = workspaces.actions;
export default workspaces.reducer;