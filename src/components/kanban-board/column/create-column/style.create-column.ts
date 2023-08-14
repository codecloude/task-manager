"use client";

import styled from "styled-components";

export const DivColumnAddContainerSC = styled.div<{open: boolean}>`
    width: 300px;
    max-height: ${({open}) => open ? "110px" : "50px"};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out; 
    background-color: var(--back-column);
    border-radius: var(--border-radius-column);
    align-items: center;
`;

export const DivColumnAddSC = styled.div`
    width: 100%;
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

export const FormCreateColumnSC = styled.form`
    width: 100%;
    height: max-content;
    min-height: 50px;
    display: grid;
    align-items: center;
    padding: 10px;
    grid-auto-rows: max-content;
    row-gap: 10px;
`;

export const DivButtonGroupeSC = styled.div`
    display: flex;
    width: 100%;
    height: 40px;
    column-gap: 5px;
`;
