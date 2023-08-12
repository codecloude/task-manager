"use client";

import React, { useEffect, useState } from "react";
import { DashboardItemType } from "@/lib/types";
import {
    DivColumnAddSC,
    DivDBTopMenuSC,
    DivDashboardIdWrapSC,
    DivGridDBTopMenuSC,
    DivKanbanWrapSC,
    H1LabelBoardSC,
} from "./style.dashboard-id";
import { Backdrop, Button, CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import { Board, DragDropProvider } from "@/components/kanban-board";
import { testData } from "./api";
import { useAppSelector } from "@/redux/store";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const styleButton = {
    textAlign: "left",
    justifyContent: "left",
    color: "#fff",
    fontWeight: 500,
    fontSize: "13px",
};

const DashboardItem = (props: DashboardItemType) => {
    const { params } = props;
    const [isBrowser, setIsBrowser] = useState<boolean>(false);
    const mode = useAppSelector((state) => state.themeModeReducer);
    const router = useRouter();

    useEffect(() => {
        // setTimeout(() => {
        if (typeof window !== "undefined") {
            setIsBrowser(true);
        }
        // }, 2000);
    }, []);

    return (
        <>
            <DivDashboardIdWrapSC mode={mode}>
                <DivDBTopMenuSC>
                    <DivGridDBTopMenuSC>
                        <Button
                            variant="text"
                            color="inherit"
                            sx={styleButton}
                            onClick={router.back}
                            startIcon={
                                <ArrowBackIosRoundedIcon sx={styleButton} />
                            }
                        >
                            Назад
                        </Button>
                        <H1LabelBoardSC>{testData.label}</H1LabelBoardSC>
                    </DivGridDBTopMenuSC>
                </DivDBTopMenuSC>
                <DivKanbanWrapSC>
                    {isBrowser ? (
                        <>
                            <DragDropProvider data={testData.columns}>
                                <Board />
                            </DragDropProvider>
                        </>
                    ) : (
                        <div>
                            <Backdrop
                                sx={{
                                    color: "#fff",
                                    zIndex: (theme) => theme.zIndex.drawer + 1,
                                }}
                                open={!isBrowser}
                                // onClick={handleClose}
                            >
                                <CircularProgress color="inherit" />
                            </Backdrop>
                        </div>
                    )}
                    <DivColumnAddSC>
                        <AddRoundedIcon />
                        <span>Добавить Калонку</span>
                    </DivColumnAddSC>
                </DivKanbanWrapSC>
            </DivDashboardIdWrapSC>
        </>
    );
};

export default DashboardItem;
