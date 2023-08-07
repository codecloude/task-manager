"use client";
import React, { useState } from "react";
import {
    DivGridHeaderSC,
    DivHeaderWrapSC,
    DivVerticalLineSC,
    LogoBoxSC,
} from "./style.header";
import {
    Avatar,
    Button,
    FormControlLabel,
    Grid,
    Menu,
    MenuItem,
} from "@mui/material";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { MaterialUISwitch } from "../material-ui-switch-mode";
import ProfileMenu from "../profile-menu";

const Header = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [mode, setMode] = useState<string | null>(
        localStorage.getItem("mode")
    );

    console.log("mode header", mode);

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMode = () => {
        const currentMode = localStorage.getItem("mode");
        const newMode = currentMode === "light" ? "dark" : "light";

        localStorage.setItem("mode", newMode);
        setMode(newMode);
    };

    return (
        <>
            <DivHeaderWrapSC>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <DivGridHeaderSC>
                        <LogoBoxSC href={"/"}>
                            Ily<span>ask</span>
                        </LogoBoxSC>
                        <DivVerticalLineSC />
                        <Button
                            id={"basic-button"}
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup={"true"}
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                            color="info"
                            variant="text"
                            endIcon={<KeyboardArrowDownOutlinedIcon />}
                        >
                            Рабочие пространства
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                "aria-labelledby": "basic-button",
                            }}
                        >
                            <MenuItem onClick={handleClose}>Earthy</MenuItem>
                            <MenuItem onClick={handleClose}>Catena</MenuItem>
                        </Menu>
                    </DivGridHeaderSC>
                    <DivGridHeaderSC>
                        <FormControlLabel
                            control={
                                <MaterialUISwitch
                                    sx={{ m: 0 }}
                                    checked={mode === "dark"}
                                    onChange={handleMode}
                                />
                            }
                            // onClick={handleMode}
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
