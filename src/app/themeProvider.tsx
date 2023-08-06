"use client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#5AA9E6",
            contrastText: "#111",
        },
        secondary: {
            main: "#111",
            contrastText: "#111",
        },
        info: {
            main: "#191919",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: "14px",
                },
                endIcon: {
                    fontSize: "30px"
                }
            },
            
        },
    },
});

const ThemeProviderComp = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </>
    );
};

export default ThemeProviderComp;
