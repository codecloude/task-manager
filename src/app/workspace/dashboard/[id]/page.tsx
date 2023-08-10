"use client";

import React from "react";
import { DashboardItemType } from "@/lib/types";
import {
    DivDBTopMenuSC,
    DivDashboardIdWrapSC,
    DivKanbanWrapSC,
} from "./style.dashboard-id";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { Board, DragDropProvider } from "@/components/kanban-board";
import { testData } from "./api";

const DashboardItem = (props: DashboardItemType) => {
    const { params } = props;
    const router = useRouter();

    return (
        <>
            <DivDashboardIdWrapSC>
                <DivDBTopMenuSC>
                    <Button
                        variant="text"
                        color="inherit"
                        sx={{ textAlign: "left", justifyContent: "left" }}
                        // startIcon={<SpaceDashboardRoundedIcon />}
                        onClick={router.back}
                    >
                        Назад
                    </Button>
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
