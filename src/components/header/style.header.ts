"use client";
import Link from "next/link";
import styled from "styled-components";

export const DivHeaderWrapSC = styled.div`
    background-color: var(--theme-mode);
    width: 100%;
    height: 100%;
    min-height: 70px;
    border-bottom: 1px solid var(--border-line);
    padding: 10px 10px;
    box-sizing: border-box;
    display: grid;
    align-items: center;
    transition: background-color .8s;
`;

export const LogoBoxSC = styled(Link)`
    font-weight: 600;
    font-size: 24px;
    user-select: none;
    text-decoration: none;
    color: var(--text-color);
    /* border-right: 1px solid var(--border-line); */
    padding-right: 10px;
    span {
        padding: 2px;
        background-color: var(--primary-blue);
        border-radius: 5px;
        transition: 0.3s;
        color: #f9f9f9;
    }

    &:hover {
        span {
            background-color: var(--light-blue);
            color: #191919;
        }
    }
`;

export const DivGridHeaderSC = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    column-gap: 10px;
`;

export const DivVerticalLineSC = styled.div`
    height: 35px;
    border-right: 1px solid var(--border-line);
`;

