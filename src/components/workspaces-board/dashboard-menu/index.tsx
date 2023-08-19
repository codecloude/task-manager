"use client";

import React, { useRef, useState } from "react";
import {
    DivWSAddBoardSC,
    DivWSBoardItemSC,
    DivWSBoardsBoxSC,
    DivWSBoardsContainerSC,
    DivWSLabelSC,
} from "./style.work-boards";
import { BoardType, WorkspaceType } from "@/lib/types";
import { DivWorkspaceIconSC } from "@/app/globals";
import { Box, Modal } from "@mui/material";
import { CreateBoard } from "./CreateBoard";

type Props = {
    workspace: WorkspaceType;
};

const WorkspaceBoards = (props: Props) => {
    const { workspace } = props;
    const { id, label, boards } = workspace;
    const rootRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: "absolute" as "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        maxWidth: 600,
        bgcolor: "background.paper",
        // border: "2px solid #000",
        boxShadow: 24,
        p: 4,
        borderRadius: "10px",
    };

    const toWorkspaceUrl = `/workspaces/${id}`

    return (
        <>
            <DivWSBoardsContainerSC>
                <DivWSLabelSC>
                    <DivWorkspaceIconSC size={40} fontSize={25}>
                        {label && label[0]}
                    </DivWorkspaceIconSC>
                    <span>{label && label}</span>
                </DivWSLabelSC>
                <DivWSBoardsBoxSC>
                    {boards?.map(({ label, id }: BoardType) => (
                        <DivWSBoardItemSC
                            href={`${toWorkspaceUrl}/dashboard/${id}`}
                            key={id}
                        >
                            {label}
                        </DivWSBoardItemSC>
                    ))}
                    <DivWSAddBoardSC onClick={handleOpen}>
                        Создать доску
                    </DivWSAddBoardSC>
                    <Modal
                        disablePortal
                        disableEnforceFocus
                        disableAutoFocus
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="server-modal-title"
                        aria-describedby="server-modal-description"
                        sx={{
                            display: "flex",
                            p: 1,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        container={() => rootRef.current}
                    >
                        <Box sx={style}>
                            <CreateBoard setOpen={setOpen} workspaceId={id} />
                        </Box>
                    </Modal>
                </DivWSBoardsBoxSC>
            </DivWSBoardsContainerSC>
        </>
    );
};

export default WorkspaceBoards;
