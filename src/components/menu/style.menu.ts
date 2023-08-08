import { Menu, styled } from "@mui/material";

export const MaterialUIMenu = styled(Menu)(({ theme }) => ({
    "& .MuiMenu-paper": {},
    "& .MuiMenu-list": {
        color: "var(--text-color)",
        width: "220px",
        fontSize: "60px",
    },
}));
