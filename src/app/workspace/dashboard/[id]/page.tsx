"use client";

import React, { useCallback } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { DashboardItemType } from "@/lib/types";
import { DivDBTopMenuSC, DivDashboardIdWrapSC, DivKanbanWrapSC } from "./style.dashboard-id";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { KanbanBoard } from "@/lib/interfaces";
import KanbanBoardComponent from "@/components/kanban-board";
import { Metadata } from "next";

const data: KanbanBoard = {
    columns: [
        {
            id: "1",
            title: "To Do",
            cards: [
                {
                    id: "1",
                    title: "Learn Next.js",
                    description: "Read the official documentation",
                },
            ],
        },
        {
            id: "1",
            title: "To Do",
            cards: [
                {
                    id: "1",
                    title: "Learn Next.js",
                    description: "Read the official documentation",
                },
            ],
        },
    ],
};

const DashboardItem = (props: DashboardItemType) => {
    const { params } = props;
    const router = useRouter();

    const onBeforeDragStart = useCallback(() => {
        /*...*/
    }, []);

    const onDragStart = useCallback(() => {
        /*...*/
    }, []);
    const onDragUpdate = useCallback(() => {
        /*...*/
    }, []);
    const onDragEnd = useCallback(() => {
        // the only one that is required
    }, []);

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
                    <DragDropContext
                        onBeforeDragStart={onBeforeDragStart}
                        onDragStart={onDragStart}
                        onDragUpdate={onDragUpdate}
                        onDragEnd={onDragEnd}
                    >
                        <KanbanBoardComponent board={data} />
                    </DragDropContext>
                </DivKanbanWrapSC>
            </DivDashboardIdWrapSC>
        </>
    );
};

export default DashboardItem;
