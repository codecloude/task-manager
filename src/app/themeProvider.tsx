"use client";
import { PaletteMode } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useEffect, useState } from "react";

const ThemeProviderComp = ({ children }: { children: React.ReactNode }) => {
    const [mode, setMode] = useState<PaletteMode | undefined>("light");
    const theme = createTheme({
        palette: {
            mode: mode,
            primary: {
                main: "#5AA9E6",
                contrastText: "#191919",
            },
            secondary: {
                main: "#191919",
                contrastText: "#191919",
            },
            info: {
                main: "#191919",
            },
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        fontSize: "13px",
                        fontWeight: "500",
                        "& .MuiSvgIcon-root": {
                            fontSize: "20px",
                        },
                    },
                },
            },
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        "& .MuiSvgIcon-root": {
                            fontSize: "30px",
                        },
                        fontSize: "14px",
                    },
                },
            },
        },
    });

    useEffect(() => {
        const storedMode = localStorage.getItem("mode");
        const defaultMode =
            storedMode === "light" || storedMode === "dark"
                ? (storedMode as PaletteMode)
                : "light";
        localStorage.setItem("mode", defaultMode)

        setMode(defaultMode);
    }, [mode]);

    return (
        <>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </>
    );
};

export default ThemeProviderComp;
