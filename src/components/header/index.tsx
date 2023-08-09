"use client";
import React, { useEffect, useState } from "react";
import {
    DivGridHeaderSC,
    DivHeaderWrapSC,
    DivVerticalLineSC,
    LogoBoxSC,
} from "./style.header";
import { Button, FormControlLabel, Grid, Menu, MenuItem } from "@mui/material";
import { MaterialUISwitch } from "../material-ui-switch-mode";
import ProfileMenu from "../profile-menu";
import { switchTheme } from "@/redux/features/theme-mode-slice";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import CustomMenu from "../menu";
import { CustomMenuPropsType } from "@/lib/types";
import { addWorkspaces } from "@/redux/features/workspaces-slice";

const Header = () => {
    const theme = useAppSelector((state) => state.themeModeReducer);
    const workspaces = useAppSelector((state) => state.workspacesReducer);
    const dispatch = useDispatch<AppDispatch>();

    const dataMenu: CustomMenuPropsType = {
        label: "Рабочие пространства",
        items: workspaces,
    };

    const handleMode = () => {
        const currentMode = localStorage.getItem("mode");
        const newMode = currentMode === "light" ? "dark" : "light";

        dispatch(switchTheme(newMode));

        localStorage.setItem("mode", newMode);
    };

    useEffect(() => {
        const workspacesString = localStorage.getItem("workspaces");
        if (workspacesString) {
            const workspacesToJson = JSON.parse(workspacesString);
            dispatch(addWorkspaces(workspacesToJson));
        }

        // if (workspaces) {
        //     const workspacesString = JSON.stringify(workspaces);
        //     localStorage.setItem("workspaces", workspacesString);
        // } else {
        // }
    }, []);

    return (
        <>
            <DivHeaderWrapSC>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    // position={"fixed"}
                >
                    <DivGridHeaderSC>
                        <LogoBoxSC href={"/"}>
                            Ily<span>ask</span>
                        </LogoBoxSC>
                        <DivVerticalLineSC />
                        <CustomMenu
                            label={dataMenu.label}
                            items={dataMenu.items ? dataMenu.items : []}
                        />
                    </DivGridHeaderSC>
                    <DivGridHeaderSC>
                        <FormControlLabel
                            control={
                                <MaterialUISwitch
                                    sx={{ m: 0 }}
                                    checked={theme === "dark"}
                                    onChange={handleMode}
                                />
                            }
                            label=""
                        />
                        <DivVerticalLineSC />
                        <ProfileMenu />
                    </DivGridHeaderSC>
                </Grid>
            </DivHeaderWrapSC>
        </>
    );
};

export default Header;
