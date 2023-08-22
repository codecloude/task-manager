"use client";

import React, { useState } from "react";
import { Button, Fab, TextField } from "@mui/material";
import { DivButtonGroupeSC, FormCreateRowSC } from "./style.create-row";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useDragDrop } from "../../DragDropProvider";

type Props = {
    columnIndex: number;
};

export const CreateRow = (props: Props) => {
    const { columnIndex } = props;
    const { handleNewTask } = useDragDrop();

    const [open, setOpen] = useState<boolean>(false);
    const [label, setLabel] = useState<string>("");

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLabel(e.target.value);
    };

    const handleOpen = () => {
        setLabel("");
        setOpen(true);
    };

    const styleButton = {
        justifyContent: "start",
        ":hover": { borderRadius: "6px" },
        fontWeight: 400,
        textTransform: "none",
        fontSize: "16px",
    };

    return (
        <>
            {open ? (
                <FormCreateRowSC>
                    <TextField
                        fullWidth
                        label="Заголовок задачи"
                        size="small"
                        onChange={onChangeInput}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleNewTask(label, columnIndex);
                                setOpen(false);
                                setLabel("");
                            }
                        }}
                    />
                    <DivButtonGroupeSC>
                        <Button
                            variant="contained"
                            fullWidth
                            onClick={() => {
                                handleNewTask(label, columnIndex);
                                setOpen(false);
                                setLabel("");
                            }}
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
                </FormCreateRowSC>
            ) : (
                <Button
                    variant="text"
                    color="inherit"
                    sx={styleButton}
                    startIcon={<AddRoundedIcon />}
                    onClick={handleOpen}
                >
                    Добавить карточку
                </Button>
            )}
        </>
    );
};
