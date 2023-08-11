"use client";

import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    width: 100%;
    height: 100%;
    margin-top: 10px;
    overflow-x: auto;
    overflow-y: auto;
    white-space: nowrap;
    box-sizing: border-box;
`;

type DropshadowProps = {
    height: number;
};

export const Dropshadow = styled.div<DropshadowProps>`
    border-radius: 3px;
    background-color: #ddd;
    width: 302px;
    height: ${({ height }) => height}px;
    z-index: 1;
`;

type ColumnDropshadowProps = {
    marginLeft: number;
};

export const ColumnDropshadow = styled(Dropshadow)<ColumnDropshadowProps>`
    margin-left: ${({ marginLeft }) => marginLeft - 1}px;
    position: absolute;
`;