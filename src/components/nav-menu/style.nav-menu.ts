"use client";

import styled from "styled-components";

export const NavMenuContainerSC = styled.nav`
    width: 100%;
    height: max-content;
    display: grid;
    grid-auto-rows: max-content;
`;

export const DivNavBarSC = styled.div`
    height: max-content;
    display: grid;
    grid-auto-rows: max-content;
`;

export const DivLineSC = styled.div`
    width: 100%;
    height: 1px;
    border-top: 1px solid var(--text-color);
    margin: 15px 0;
`;

export const DivNavWorkspacesSC = styled.div`
    height: max-content;
    display: grid;
    grid-auto-rows: max-content;
    row-gap: 10px;
`;

export const DivWorkspacesGroupSC = styled.div`
    
`;

export const PNavMessageSC = styled.p`
    padding: 8px 8px;
    font-size: 14px;
    text-decoration: underline;
`;