"use client";

import styled from "styled-components";

export const BoardContainer = styled.div`
    display: flex;
    overflow-x: auto;
    gap: 20px;
    padding: 20px;
`;

export const ColumnContainer = styled.div`
    min-width: 200px;
    background-color: #f4f4f4;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const CardContainer = styled.div`
    background-color: #fff;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
