"use client";

import { PaletteMode } from "@mui/material";
import styled, { css } from "styled-components";

export const DivRowContainerSC = styled.div<{ mode: PaletteMode | undefined }>`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    width: 100%;
    height: max-content;
    padding: 5px 10px;
    min-height: 50px;
    margin-bottom: 15px;
    ${({ mode }) =>
        mode === "light"
            ? css`
                  background-color: var(--theme-mode);
                  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
                      rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
              `
            : css`
                  background-color: #22272B;
              `}
`;
