"use client";

import React, { useState } from "react";
import { DivWorkspaceIconSC, LinkWorkspaceItemSC } from "./style.wrk-item";
import { CreateWorkspacePropsType, WorkspaceType } from "@/lib/types";
import { Box, Button, TextField, Typography } from "@mui/material";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { addWorkspaces } from "@/redux/features/workspaces-slice";

export const WorkspaceItem = (props: WorkspaceType) => {
    const { label, url } = props;
    return (
        <>
            <LinkWorkspaceItemSC href={url ? url : "/"}>
                <DivWorkspaceIconSC>
                    {label && label[0].toLocaleUpperCase()}
                </DivWorkspaceIconSC>
                <span>{label}</span>
            </LinkWorkspaceItemSC>
        </>
    );
};

export const CreateWorkspace = (props: CreateWorkspacePropsType) => {
    const { setOpen } = props;
    const [label, setLabel] = useState<string>("");
    
    const dispatch = useDispatch<AppDispatch>();

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLabel(e.target.value);
    };

    const addWorkspace = () => {
        if (!label || label === "") {
            return alert("Введите название нового рабочего пространства");
        }

        const id = +new Date();
        const newWorkspace: WorkspaceType = {
            id,
            label,
            url: `/workspace/dashboard/${id}`,
        };

        const workspacesStr = localStorage.getItem("workspaces");
        let workspaces: WorkspaceType[] = [];

        if (workspacesStr) {
            workspaces = JSON.parse(workspacesStr);
        }

        workspaces.push(newWorkspace);

        localStorage.setItem("workspaces", JSON.stringify(workspaces));

        dispatch(addWorkspaces(workspaces));

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
                    Создайте новое рабочее пространство
                </Typography>
                <Typography id="server-modal-description">
                    Придумайте название для вашего рабочего пространства
                </Typography>
                <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Название рабочего пространства"
                    value={label}
                    onChange={onChangeInput}
                />
                <Button variant="contained" onClick={addWorkspace}>
                    Создать
                </Button>
            </Box>
        </>
    );
};
