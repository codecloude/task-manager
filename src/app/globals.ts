"use client";
import { PaletteMode } from "@mui/material";
import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle<{ mode?: string }>`
    :root {
        --theme-mode: ${({ mode }) =>
            mode === "light" ? "#f9f9f9" : "#1D2125"};
        --text-color: ${({ mode }) =>
            mode === "light" ? "#191919" : "#A1ADBB"};
        --text-color-rev: ${({ mode }) =>
            mode === "light" ? "#fff" : "#191919"};
        --main-white: #f9f9f9;
        --light-blue: #7FC8F8;
        --primary-blue: #5AA9E6;
        --border-line: ${({ mode }) =>
            mode === "light" ? "#e6e6e6" : "#424242"};
        --back-card: ${({ mode }) =>
            mode === "light" ? "#ddd" : "#1B1D09"};  
        --back-column: ${({ mode }) =>
            mode === "light" ? "#f9f9f9" : "#101204"}; 
        --border-radius-column: 10px;
        --border-radius-card: 6px;
        --transition: 0.3s;
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        
    }

    body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        min-height: 100vh;
        background-color: var(--theme-mode);
        transition: background-color .8s;
    }
`;

export const DivWrapperSC = styled.div`
    display: grid;
    width: 100%;
    height: calc(100% - 70px);
    padding-top: 70px;
    color: var(--text-color);
    position: relative;
    box-sizing: border-box;
`;

export const DivWrapChildrenSC = styled.div`
    width: 100%;
    height: 100%;
    height: calc(100vh - 70px);
`;

export const H1MainSC = styled.h1`
    font-size: 22px;
    font-weight: 700;
`;

export const DivWorkspaceIconSC = styled.div<{
    size?: number | 30;
    fontSize?: number | 20;
}>`
    height: ${({size}) => size && `${size}px`};
    width: ${({size}) => size && `${size}px`};
    /* background-color: rgba(0, 0, 0, 0.15); */
    background-color: var(--primary-blue);
    display: grid;
    justify-items: center;
    align-items: center;
    border-radius: 5px;
    font-size: ${({fontSize}) => fontSize && `${fontSize}px`};
    font-weight: 600;
    text-transform: uppercase;
    user-select: none;
    color: #fff;
`;