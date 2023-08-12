"use client";

import React from "react";
import { DivWSBoardsContainerSC, DivWSLabelSC } from "./style.work-boards";
import { WorkspaceType } from "@/lib/types";
import { DivWorkspaceIconSC } from "@/app/globals";

type Props = {
    workspace: WorkspaceType;
};

const WorkspaceBoards = (props: Props) => {
    const { workspace } = props;
    const {id, label, boards} = workspace;

    return (
        <>
            <DivWSBoardsContainerSC>
                <DivWSLabelSC>
                    <DivWorkspaceIconSC size={40} fontSize={25}>
                        {label && label[0]}
                    </DivWorkspaceIconSC>
                    <span>{label && label}</span>
                </DivWSLabelSC>
            </DivWSBoardsContainerSC>
        </>
    );
};

export default WorkspaceBoards;
