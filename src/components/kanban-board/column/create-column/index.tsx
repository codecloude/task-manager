"use client";

import React, { useState } from "react";
import { Box, Button, Fab, TextField, Typography } from "@mui/material";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { addColumn, addWorkspaces } from "@/redux/features/workspaces-slice";
import { v4 } from "uuid";
import { BoardType, ColumnType, WorkspaceType } from "@/lib/types";
import {
    DivButtonGroupeSC,
    DivColumnAddContainerSC,
    DivColumnAddSC,
    FormCreateColumnSC,
} from "./style.create-column";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

type Props = {
    workspaceId: string;
    dashboardId: string;
};

export const CreateColumn = (props: Props) => {
    const { workspaceId, dashboardId } = props;
    const workspaces = useAppSelector((state) => state.workspacesReducer);
    const dispatch = useDispatch<AppDispatch>();
    const [open, setOpen] = useState<boolean>(false);
    const [label, setLabel] = useState<string>("");

    // console.log("create column", workspaceId, dashboardId);

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLabel(e.target.value);
    };

    const createColumn = (
        workspaceId: string,
        dashboardId: string,
        label: string
    ) => {
        try {
            if (label === "") {
                return alert("Ведите заголовок списка");
            }

            if (workspaceId === "" && dashboardId === "") {
                return;
            }
            
            const id = v4();

            const newColumn: ColumnType = {
                id,
                label,
                tasks: [],
            };

            const updateWorkspaces: WorkspaceType[] = workspaces.map(
                (workspace: WorkspaceType) => {
                    if (workspace.id === workspaceId) {
                        workspace?.boards?.map((board: BoardType) => {
                            if (board.id === dashboardId) {
                                return {
                                    ...board,
                                    columns: [
                                        ...(board.columns || []),
                                        newColumn,
                                    ],
                                };
                            }
                            return board;
                        });
                    }
                    return workspace;
                }
            );

            localStorage.setItem(
                "workspaces",
                JSON.stringify(updateWorkspaces)
            );
            dispatch(
                addColumn({ workspaceId, dashboardId, column: newColumn })
            );
            setOpen(false);
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Error creating column:", error.message);
                alert(
                    "Произошла ошибка при создании колонки. Пожалуйста, попробуйте снова."
                );
            }
        }
    };

    return (
        <>
            <DivColumnAddContainerSC open={open}>
                {open ? (
                    <FormCreateColumnSC>
                        <TextField
                            fullWidth
                            label="Заголовок списка"
                            size="small"
                            onChange={onChangeInput}
                        />
                        <DivButtonGroupeSC>
                            <Button
                                variant="contained"
                                fullWidth
                                onClick={() =>
                                    createColumn(
                                        workspaceId,
                                        dashboardId,
                                        label
                                    )
                                }
                            >
                                Создать
                            </Button>
                            <Fab
                                size="small"
                                aria-label="close"
                                onClick={() => setOpen(false)}
                            >
                                <CloseRoundedIcon />
                            </Fab>
                        </DivButtonGroupeSC>
                    </FormCreateColumnSC>
                ) : (
                    <DivColumnAddSC onClick={() => setOpen(true)}>
                        <AddRoundedIcon />
                        <span>Добавить колонку</span>
                    </DivColumnAddSC>
                )}
            </DivColumnAddContainerSC>
        </>
    );
};
