import { Button, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import React, { useState } from "react";
import { CustomMenuPropsType, WorkspaceType } from "@/lib/types";
import { MaterialUIMenu } from "./style.menu";
import { useRouter } from "next/navigation";

const CustomMenu = (props: CustomMenuPropsType) => {
    const { label, items } = props;

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const router = useRouter();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (url: string) => {
        setAnchorEl(null);
        router.push(`${url}`);
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
                endIcon={<KeyboardArrowDownOutlinedIcon />}
                disabled={items.length === 0}
            >
                {label}
            </Button>
            {items.length !== 0 && (
                <MaterialUIMenu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        "aria-labelledby": "basic-button",
                    }}
                >
                    {items.map(({ label, url, id }: WorkspaceType) => (
                        <MenuItem key={id} onClick={() => handleClose(url)}>
                            {label}
                        </MenuItem>
                    ))}

                    {/* <MenuItem onClick={handleClose}>Catena</MenuItem> */}
                </MaterialUIMenu>
            )}
        </>
    );
};

export default CustomMenu;
