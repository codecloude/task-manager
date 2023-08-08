import { Button, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import React, { useState } from "react";
import { CustomMenuPropsType } from "@/lib/types";
import { MaterialUIMenu } from "./style.menu";

const CustomMenu = (props: CustomMenuPropsType) => {
    const { label, items } = props;

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
            <Button
                id={"basic-button"}
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup={"true"}
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                color="info"
                // variant="text"
                endIcon={<KeyboardArrowDownOutlinedIcon />}
            >
                {label}
            </Button>
            <MaterialUIMenu
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
            </MaterialUIMenu>
        </>
    );
};

export default CustomMenu;
