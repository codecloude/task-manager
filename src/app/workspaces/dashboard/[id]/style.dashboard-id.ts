"use client";

import { PaletteMode } from "@mui/material";
import styled, { css } from "styled-components";

export const DivDashboardIdWrapSC = styled.div<{
    mode: PaletteMode | undefined;
}>`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 50px auto;
    /* border: 1px solid black; */
    position: relative;

    &::before,
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        transition: opacity 0.9s;
    }

    &::before {
        background-image: linear-gradient(
            to right top,
            #00c8b6,
            #00cad0,
            #2acae4,
            #58caf1,
            #7fc8f8
        );
        opacity: ${({ mode }) => (mode === "light" ? 1 : 0)};
    }

    &::after {
        background-image: linear-gradient(
            to right bottom,
            #10163f,
            #121c53,
            #132267,
            #14277c,
            #152d92,
            #242fa0,
            #3331ae,
            #4232bb,
            #5a2ec3,
            #7128ca,
            #871ccf,
            #9d00d4
        );
        opacity: ${({ mode }) => (mode === "dark" ? 1 : 0)};
    }
`;

export const DivDBTopMenuSC = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.2);
    position: sticky;
`;

export const DivKanbanWrapSC = styled.div`
    width: 100%;
    height: 100%;
    z-index: 2;
    overflow-y: auto;
    display: flex;
    padding: 15px;
`;

export const DivGridDBTopMenuSC = styled.div`
    width: 100%;
    max-width: 100vw;
    height: 100%;
    display: flex;
    column-gap: 20px;
    align-items: center;
`;

export const H1LabelBoardSC = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    user-select: none;
`;

export const DivColumnAddSC = styled.div`
    display: inline-block;
    width: 300px;
    height: 50px;
    background-color: var(--back-column);
    border-radius: var(--border-radius-column);
    align-items: center;
    padding: 10px;
    display: flex;
    column-gap: 10px;
    cursor: pointer;
    user-select: none;
    transition: var(--transition);
    &:hover {
        background-color: var(--back-card);
    }
    &:active {
        opacity: 0.8;
    }
`;
