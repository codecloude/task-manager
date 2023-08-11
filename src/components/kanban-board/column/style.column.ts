"use client";

import styled from "styled-components";
import { Dropshadow } from "../board/style.board";

export const ColumnContainerSC = styled.div<{ isDragging?: boolean }>`
    display: grid;
    grid-template-rows: max-content auto max-content;
    row-gap: 10px;
    width: 100%;
    max-width: 300px;
    height: max-content;
    max-height: 100%;
    margin-right: 20px;
    flex: 1 0 auto;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    padding: 10px 10px;
    border-radius: 10px;
    background-color: var(--theme-mode);
    /* display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    max-width: 300px;
    min-width: 300px;
    height: calc(100vh - 280px);
   
    
    position: relative;
    ${({ isDragging }) => isDragging && "opacity: 0.6;"} */
`;

export const DivRowContainerSC = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 1px;
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
    transition: color .2s;
    &:hover {
        color: var(--primary-blue);
    }
    /* display: flex;
    justify-content: flex-start;
    align-items: center;
    width: auto;
    color: #333;
    background-color: transparent;
    font-weight: 400;
    padding: 0;
    cursor: default;
    &:hover {
        color: #428bca;
    } */
`;

export const Row = styled.div`
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
`;

type RowDropshadowProps = {
    marginTop: number;
};

export const RowDropshadow = styled(Dropshadow)<RowDropshadowProps>`
    margin-top: ${({ marginTop }) => `${marginTop}px`};
`;
export const DropshadowContainer = styled(DivRowContainerSC)`
    width: auto;
    position: absolute;
`;
