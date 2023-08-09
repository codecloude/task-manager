"use client";

import styled from "styled-components";
import Link from "next/link";

export const LinkWorkspaceItemSC = styled(Link)`
    text-decoration: none;
    width: 100%;
    height: 40px;
    padding: 8px 8px;
    display: grid;
    align-items: center;
    border-radius: 4px;
    display: flex;
    column-gap: 10px;
    color: var(--text-color);
    /* border: 1px solid black; */
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    &:hover {
        background-color: rgba(0, 0, 0, 0.04);
    }
    &:active {
        background-color: rgba(0, 0, 0, 0.3);
    }
`;

export const DivWorkspaceIconSC = styled.div`
    height: 30px;
    width: 30px;
    background-color: rgba(0, 0, 0, 0.15);
    display: grid;
    justify-items: center;
    align-items: center;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 600;
`;

