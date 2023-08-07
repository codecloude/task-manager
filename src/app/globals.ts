"use client";

import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<{mode?: string | null}>`
    :root {
        --theme-mode: ${({mode}) => (mode === "light" ? "#f9f9f9" : "black")};
        --text-color: #191919;
        --main-white: #f9f9f9;
        --light-blue: #7FC8F8;
        --primary-blue: #5AA9E6;
        --border-line: #e6e6e6;
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
    }
`;

export const DivWrapperSC = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-rows: max-content auto;
`;

export const DivWrapChildrenSC = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px 0px;
`;

export const DivInBtnWithIconSC = styled.div`
    
`;
