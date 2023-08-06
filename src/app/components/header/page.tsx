"use client";
import React, { useState } from "react";
import { DivGridHeaderSC, DivHeaderWrapSC, LogoBoxSC } from "./style.header";
import { Button, Grid, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const Header = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
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
                        <Button
                            id={"basic-button"}
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup={"true"}
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                            color="info"
                            variant="text"
                            endIcon={<KeyboardArrowDownOutlinedIcon />}
                            label={
                                <span>
                                    <b>Status:</b> Completed
                                </span>
                            }
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
                    <div></div>
                </Grid>
            </DivHeaderWrapSC>
        </>
    );
};

export default Header;
