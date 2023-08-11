"use client";

import React from "react";
import { DashboardItemType } from "@/lib/types";
import {
    DivDBTopMenuSC,
    DivDashboardIdWrapSC,
    DivGridDBTopMenuSC,
    DivKanbanWrapSC,
    H1LabelBoardSC,
} from "./style.dashboard-id";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { Board, DragDropProvider } from "@/components/kanban-board";
import { testData } from "./api";
import { useAppSelector } from "@/redux/store";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

const styleButton = {
    textAlign: "left",
    justifyContent: "left",
    color: "#fff",
    fontWeight: 500,
    fontSize: "13px",
};

const DashboardItem = (props: DashboardItemType) => {
    const { params } = props;
    const mode = useAppSelector((state) => state.themeModeReducer);
    const router = useRouter();

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
                        <H1LabelBoardSC>
                            {testData.label}
                        </H1LabelBoardSC>
                    </DivGridDBTopMenuSC>
                </DivDBTopMenuSC>
                <DivKanbanWrapSC>
                    <DragDropProvider data={testData.columns}>
                        <Board />
                    </DragDropProvider>
                </DivKanbanWrapSC>
            </DivDashboardIdWrapSC>
        </>
    );
};

export default DashboardItem;
