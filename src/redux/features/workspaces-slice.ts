import { ColumnType, WorkspaceType } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: WorkspaceType[] = [];

export const workspaces = createSlice({
    name: "workspaces",
    initialState,
    reducers: {
        addWorkspaces: (state, action: PayloadAction<WorkspaceType[]>) => {
            return action.payload;
        },
        addColumn: (
            state,
            action: PayloadAction<{
                workspaceId: string;
                dashboardId: string;
                column: ColumnType;
            }>
        ) => {
            const { workspaceId, dashboardId, column } = action.payload;

            const workspace = state.find((w) => w.id === workspaceId);
            const board = workspace?.boards?.find((b) => b.id === dashboardId);

            if (board) {
                board.columns = [...board.columns, column];
            }
        },
    },
});

export const { addWorkspaces, addColumn } = workspaces.actions;
export default workspaces.reducer;
