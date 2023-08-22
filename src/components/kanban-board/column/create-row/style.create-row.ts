"use client";

import styled, { css } from "styled-components";

export const DivColumnAddSC = styled.div`
    width: 100%;
    height: 50px;
    border-radius: var(--border-radius-column);
    align-items: center;
    padding: 10px;
    display: flex;
    column-gap: 10px;
    cursor: pointer;
    user-select: none;
    transition: var(--transition);
`;

export const FormCreateRowSC = styled.form`
    width: 100%;
    height: max-content;
    min-height: 50px;
    display: grid;
    align-items: center;
    /* padding: 10px; */
    grid-auto-rows: max-content;
    row-gap: 10px;
`;

export const DivButtonGroupeSC = styled.div`
    display: flex;
    width: 100%;
    height: 40px;
    column-gap: 5px;
`;
