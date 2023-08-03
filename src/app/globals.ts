"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    #root {
        --dark-mode: black;
        --light-mode: white;
    }

    body {
        margin: 0;
        padding: 0;
        /* background: green; */
    }
`;

export default GlobalStyle;
