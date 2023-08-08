"use client";

import { PaletteMode } from "@mui/material";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<{ mode?: PaletteMode }>`
    :root {
        --theme-mode: ${({ mode }) =>
            mode === "light" ? "#f9f9f9" : "#1D2125"};
        --text-color: ${({ mode }) =>
            mode === "light" ? "#191919" : "#A1ADBB"};
        --main-white: #f9f9f9;
        --light-blue: #7FC8F8;
        --primary-blue: #5AA9E6;
        --border-line: ${({ mode }) =>
            mode === "light" ? "#e6e6e6" : "#424242"};
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
    height: 100%;
    grid-template-rows: max-content auto;
    color: var(--text-color);
`;

export const DivWrapChildrenSC = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px 0px;
`;

export const DivInBtnWithIconSC = styled.div``;
