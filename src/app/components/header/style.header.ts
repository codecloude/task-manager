"use client";
import Link from "next/link";
import styled from "styled-components";

export const DivHeaderWrapSC = styled.div`
    background-color: var(--main-white);
    width: 100%;
    height: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 10px 10px;
    display: grid;
    align-items: center;
`;

export const LogoBoxSC = styled(Link)`
    font-weight: 600;
    font-size: 24px;
    user-select: none;
    text-decoration: none;
    color: var(--text-color);
    span {
        padding: 2px;
        background-color: var(--primary-blue);
        border-radius: 5px;
        color: var(--main-white);
        transition: 0.3s;
    }

    &:hover {
        span {
            background-color: var(--light-blue);
        }
    }
`;

export const DivGridHeaderSC = styled.div`
    display: flex;
    /* width: max-content; */
    height: max-content;
    /* flex-direction: row; */
    align-items: center;
    column-gap: 20px;
`;
