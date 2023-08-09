"use client";
import React, { useEffect, useRef, useState } from "react";
import {
    DivLineSC,
    DivNavBarSC,
    DivNavWorkspacesSC,
    DivWorkspacesGroupSC,
    NavMenuContainerSC,
    PNavMessageSC,
} from "./style.nav-menu";
import { NavMenuPropsType, WorkspaceType } from "@/lib/types";
import { Box, Button, Modal, Typography } from "@mui/material";
import SpaceDashboardRoundedIcon from "@mui/icons-material/SpaceDashboardRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { CreateWorkspace, WorkspaceItem } from "./workspace-item";
import { useAppSelector } from "@/redux/store";

const NavMenu = (props: NavMenuPropsType) => {
    const workspaces = useAppSelector((state) => state.workspacesReducer);
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
        borderRadius: "10px"
    };

    return (
        <>
            <NavMenuContainerSC>
                <DivNavBarSC>
                    <Button
                        variant="text"
                        color="inherit"
                        sx={{ textAlign: "left", justifyContent: "left" }}
                        startIcon={<SpaceDashboardRoundedIcon />}
                    >
                        Доски
                    </Button>
                    {/* <Button variant="text">Шаблоны</Button> */}
                </DivNavBarSC>
                <DivLineSC />
                <DivNavWorkspacesSC>
                    <Button
                        variant="text"
                        color="inherit"
                        sx={{
                            textAlign: "left",
                            justifyContent: "space-between",
                        }}
                        endIcon={<AddRoundedIcon />}
                        onClick={handleOpen}
                    >
                        Рабочие Пространства
                    </Button>
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
                            <CreateWorkspace setOpen={setOpen}/>
                        </Box>
                    </Modal>
                    <DivWorkspacesGroupSC>
                        {/* <WorkspaceItem label="Earthy" url="/workspace/dashboard/Earthy"/> */}
                        {workspaces.length !== 0 ? (
                            workspaces.map((item: WorkspaceType) => (
                                <WorkspaceItem
                                    key={item.id}
                                    label={item.label}
                                    url={item.url}
                                />
                            ))
                        ) : (
                            <PNavMessageSC>
                                У вас пока нет рабочих пространств
                            </PNavMessageSC>
                        )}
                    </DivWorkspacesGroupSC>
                </DivNavWorkspacesSC>
            </NavMenuContainerSC>
        </>
    );
};

export default NavMenu;
