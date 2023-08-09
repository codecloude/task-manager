"use client";

import { KanbanBoard } from "@/lib/interfaces";
import styled from "styled-components";
import ColumnComponent from "./column";

const BoardWrapper = styled.div`
    display: flex;
`;

interface BoardProps {
    board: KanbanBoard;
}

const KanbanBoardComponent = ({ board } : BoardProps) => {
    return (
        <BoardWrapper>
            {board.columns.map((column) => (
                <ColumnComponent key={column.id} column={column} />
            ))}
        </BoardWrapper>
    );
};

export default KanbanBoardComponent