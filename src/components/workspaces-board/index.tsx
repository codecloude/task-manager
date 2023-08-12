"use client";

import React, { useEffect } from "react";
import { DivWSContainerSC } from "./style.work-board";
import { H1MainSC } from "@/app/globals";
import { useAppSelector } from "@/redux/store";
import { WorkspaceType } from "@/lib/types";
import WorkspaceBoards from "./workspace-boards";

const WorkspacesBoard = () => {
    const workspaces: WorkspaceType[] = useAppSelector((state) => state.workspacesReducer);

    // useEffect(() => {

    // }, [])

    return (
        <>
            <DivWSContainerSC>
                <H1MainSC>Ваши рабочие пространства</H1MainSC>
                {workspaces &&
                    workspaces.map((workspace: WorkspaceType) => (
                        <WorkspaceBoards
                            workspace={workspace}
                            key={workspace.id}
                        />
                    ))}
            </DivWSContainerSC>
        </>
    );
};

export default WorkspacesBoard;
