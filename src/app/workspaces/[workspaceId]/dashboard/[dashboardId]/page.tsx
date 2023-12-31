"use client";

import React, { useEffect, useState } from "react";
import { BoardType, DashboardItemType, WorkspaceType } from "@/lib/types";
import {
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
import { CreateColumn } from "@/components/kanban-board/column/create-column";

const styleButton = {
    textAlign: "left",
    justifyContent: "left",
    color: "#fff",
    fontWeight: 500,
    fontSize: "13px",
};

type Props = {
    params: {
        workspaceId: string;
        dashboardId: string;
    };
};

const DashboardItem = (props: Props) => {
    const { params } = props;
    const workspacesFromRedux = useAppSelector(
        (state) => state.workspacesReducer
    );
    const [workspace, setWorkspace] = useState<WorkspaceType>();
    const [board, setBoard] = useState<BoardType>();
    const [isBrowser, setIsBrowser] = useState<boolean>(false);
    const mode = useAppSelector((state) => state.themeModeReducer);
    const router = useRouter();

    useEffect(() => {
        const currentWorkspace: WorkspaceType | undefined =
            workspacesFromRedux.find(
                (workspace: WorkspaceType) =>
                    workspace.id === params.workspaceId
            );

        const currentBoard: BoardType | undefined =
            currentWorkspace?.boards?.find(
                (board: BoardType) => board.id === params.dashboardId
            );
        setWorkspace(currentWorkspace);
        setBoard(currentBoard);
        // if (typeof window !== "undefined") {
        //     setIsBrowser(true);
        // }
    }, [workspacesFromRedux]);

    console.log("board", board);
    
    
    useEffect(() => {
        setTimeout(() => {
            if (typeof window !== "undefined") {
                setIsBrowser(true);
            }
        }, 2000);
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
                        <H1LabelBoardSC>{board && board.label}</H1LabelBoardSC>
                    </DivGridDBTopMenuSC>
                </DivDBTopMenuSC>
                <DivKanbanWrapSC>
                    {isBrowser && board !== undefined ? (
                        <>
                            <DragDropProvider
                                data={board && board?.columns}
                            >
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
                    <CreateColumn
                        workspaceId={params.workspaceId}
                        dashboardId={params.dashboardId}
                    />
                </DivKanbanWrapSC>
            </DivDashboardIdWrapSC>
        </>
    );
};

export default DashboardItem;
