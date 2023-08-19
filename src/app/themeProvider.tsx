"use client";
import React, { useEffect, useState } from "react";
import { switchTheme } from "@/redux/features/theme-mode-slice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { PaletteMode } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { GlobalStyle } from "./globals";

const ThemeProviderComp = ({ children }: { children: React.ReactNode }) => {
    // const [mode, setMode] = useState<PaletteMode | undefined>("light");
    const mode = useAppSelector((state) => state.themeModeReducer);

    const dispatch = useDispatch<AppDispatch>();

    const theme = createTheme({
        palette: {
            mode: mode ? mode : "light",
            primary: {
                main: "#5AA9E6",
                contrastText: "#ffffff",
            },
            secondary: {
                main: "#191919",
                // contrastText: "#191919",
            },
            info: {
                main: mode === "light" ? "#191919" : "#A1ADBB",
            },
        },
        typography: {
            fontFamily: '"Roboto", "Arial", sans-serif', // Установите ваш стандартный шрифт здесь
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        fontSize: "14px",
                        fontWeight: "500",
                        boxShadow: "none",
                        "& .MuiSvgIcon-root": {
                            fontSize: "20px",
                        },
                        ":active": {
                            boxShadow: "none",
                        },
                        ":hover": {
                            boxShadow: "none",
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
            MuiMenu: {
                styleOverrides: {
                    root: {
                        fontSize: 30,
                    },
                },
            },
            MuiFab: {
                styleOverrides: {
                    root: {
                        width: "40px",
                        height: "40px",
                        backgroundColor: "initial",
                        boxShadow: "none",
                        borderRadius: "5px",
                        color: mode === "light" ? "#191919" : "#A1ADBB",
                        ":hover": {
                            backgroundColor: "rgba(25, 25, 25, 0.04)",
                        },
                        ":active": {
                            boxShadow: "none",
                        },
                    },
                },
            },
        },
    });

    useEffect(() => {
        const storedMode = localStorage.getItem("mode");
        if (!mode) {
            const defaultMode =
                storedMode === "light" || storedMode === "dark"
                    ? (storedMode as PaletteMode)
                    : "light";
            localStorage.setItem("mode", defaultMode);
        } else {
            dispatch(switchTheme(storedMode as PaletteMode));
        }
    }, [mode]);

    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle mode={mode ? mode : "light"} />
                {children}
            </ThemeProvider>
        </>
    );
};

export default ThemeProviderComp;
