"use client";

import { PlaceBoardType } from "@/lib/types";
import styled, { css } from "styled-components";

export const DivBoardContainerSC = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    width: 100%;
    width: max-content;
    height: 100%;
    overflow-x: auto;
    overflow-y: auto;
    white-space: nowrap;
    box-sizing: border-box;
`;

type DropshadowProps = {
    height: number;
    place: PlaceBoardType;
};

export const Dropshadow = styled.div<DropshadowProps>`
    ${({ place }) =>
        place === "column"
            ? css`
                  background-color: var(--back-column);
                  border-radius: var(--border-radius-column);
              `
            : css`
                  background-color: var(--back-card);
                  border-radius: var(--border-radius-card);
              `}
    width: ${({ place }) => (place === "column" ? "300px" : "276px")};
    height: ${({ height }) => height}px;
    z-index: 1;
    opacity: 0.7;
`;

type ColumnDropshadowProps = {
    marginLeft: number;
};

export const DivColumnDropshadowSC = styled(Dropshadow)<ColumnDropshadowProps>`
    margin-left: ${({ marginLeft }) => marginLeft - 1}px;
    position: absolute;
`;
