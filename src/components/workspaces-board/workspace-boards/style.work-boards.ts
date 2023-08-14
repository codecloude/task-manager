"use client";

import Link from "next/link";
import styled from "styled-components";

export const DivWSBoardsContainerSC = styled.div`
    width: 100%;
    height: max-content;
    display: grid;
    grid-auto-rows: max-content;
    row-gap: 20px;
`;

export const DivWSLabelSC = styled.div`
    width: 100%;
    height: max-content;
    display: flex;
    align-items: center;
    font-size: 20px;
    column-gap: 10px;
`;

export const DivWSBoardsBoxSC = styled.div`
    width: 100%;
    height: max-content;
    display: flex;
    column-gap: 15px;
`;

export const DivWSBoardItemSC = styled(Link)`
    text-decoration: none;
    width: 193px;
    height: 96px;
    display: flex;
    column-gap: 10px;
    background-color: var(--primary-blue);
    color: #fff;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 1.2rem;
    border-radius: 5px;
    text-align: center;
    padding: 5px;
    transition: var(--transition);
    cursor: pointer;
    &:hover {
        opacity: 0.9;
        background-color: var(--light-blue);
        color: #191919;
    }
`;

export const DivWSAddBoardSC = styled.div`
    width: 193px;
    height: 96px;
    display: flex;
    column-gap: 10px;
    background-color: var(--border-line);
    /* color: #fff; */
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 1rem;
    border-radius: 5px;
    text-align: center;
    padding: 5px;
    transition: var(--transition);
    cursor: pointer;
    &:hover {
        background-color: var(--back-card);
    }
`;
