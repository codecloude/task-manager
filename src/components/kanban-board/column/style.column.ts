"use client";

import styled, { css } from "styled-components";
import { Dropshadow } from "../board/style.board";
import { PaletteMode } from "@mui/material";

export const DivColumnContainerSC = styled.div<{
    isDragging?: boolean;
    mode: PaletteMode | undefined;
}>`
    display: grid;
    grid-template-rows: max-content auto max-content;
    /* row-gap: 10px; */
    width: 100%;
    max-width: 300px;
    min-width: 300px;
    height: max-content;
    max-height: 100%;
    margin-right: 20px;
    flex: 1 0 auto;
    padding: 10px 10px;
    border-radius: 10px;
    background-color: var(--back-column);
    ${({ isDragging }) => isDragging && "opacity: 0.6;"}
`;

export const DivRowsWrapperSC = styled.div`
    display: grid;
    grid-auto-rows: max-content;
    width: 100%;
    height: 100%;
    max-height: calc(100vh - 275px);
    min-height: 1px;
    padding: 2px;
    overflow-y: auto;
    white-space: nowrap;
    position: relative;

`;

export const DivLabelContainerSC = styled.div`
    width: 100%;
    height: max-content;
`;

export const DivLabelColumnSC = styled.div`
    color: var(--text-color);
    padding: 10px 8px;
    font-weight: 600;
    font-size: 18px;
    transition: color 0.2s;
    &:hover {
        color: var(--primary-blue);
    }
`;

type RowDropshadowProps = {
    marginTop: number;
};

export const RowDropshadow = styled(Dropshadow)<RowDropshadowProps>`
    margin-top: ${({ marginTop }) => `${marginTop}px`};
`;
export const DivDropshadowRowSC = styled(DivRowsWrapperSC)`
    width: auto;
    position: absolute;
`;
