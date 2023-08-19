"use client";

import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { addWorkspaces } from "@/redux/features/workspaces-slice";
import { v4 } from "uuid";
import { BoardType, WorkspaceType } from "@/lib/types";

type Props = {
    setOpen: (value: boolean) => void;
    workspaceId: string | undefined;
};

export const CreateBoard = (props: Props) => {
    const { setOpen, workspaceId } = props;
    const [label, setLabel] = useState<string>("");

    const dispatch = useDispatch<AppDispatch>();

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLabel(e.target.value);
    };

    const addBoard = () => {
        if (!label || label === "") {
            return alert("Введите название доски");
        }

        const id: string = v4();
        const newBoard: BoardType = {
            id,
            label,
            columns: [],
        };

        const workspacesStr = localStorage.getItem("workspaces");
        let workspaces: WorkspaceType[] = [];

        if (workspacesStr) {
            workspaces = JSON.parse(workspacesStr);
        }

        const updateWorkspaces: WorkspaceType[] = workspaces.map(
            (workspace: WorkspaceType) => {
                if (workspace.id === workspaceId) {
                    return {
                        ...workspace,
                        boards: [...(workspace.boards || []), newBoard],
                    };
                }
                return workspace;
            }
        );

        localStorage.setItem("workspaces", JSON.stringify(updateWorkspaces));
        dispatch(addWorkspaces(updateWorkspaces));
        setOpen(false);
    };

    const styleBox = {
        "& .MuiTextField-root": {
            m: 0,
            width: "100%",
            color: "var(--text-color)",
        },
        "& .MuiButton-contained": {
            fontWeight: "600",
            boxShadow: "0 0 0 0 #fff",
        },
        display: "grid",
        gridAutoRows: "max-content",
        rowGap: "20px",
        borderRadius: "10px",
    };

    return (
        <>
            <Box component="form" sx={styleBox} noValidate autoComplete="off">
                <Typography id="server-modal-title" variant="h6" component="h2">
                    Создайте новую рабочую доску для ваше команды
                </Typography>
                <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Название доски"
                    value={label}
                    onChange={onChangeInput}
                />
                <Button variant="contained" onClick={addBoard}>
                    Создать
                </Button>
            </Box>
        </>
    );
};
