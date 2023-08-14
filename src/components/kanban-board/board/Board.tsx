"use client";

import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Column from "../column/Column";
import { useDragDrop } from "../DragDropProvider";
import {
    DivColumnDropshadowSC,
    DivBoardContainerSC,
} from "./style.board";

const Board = () => {
    const {
        handleDragEnd,
        handleDragStart,
        handleDragUpdate,
        colDropshadowProps,
        columns,
    } = useDragDrop();

    return (
        <DragDropContext
            onDragEnd={handleDragEnd}
            onDragStart={handleDragStart}
            onDragUpdate={handleDragUpdate}
        >
            <Droppable
                droppableId="all-columns"
                direction="horizontal"
                type="column"
            >
                {(provided, snapshot) => (
                    <DivBoardContainerSC
                        id="task-board"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {columns.map((column, columnIndex) => (
                            <Column
                                key={column.id}
                                column={column}
                                columnIndex={columnIndex}
                            />
                        ))}
                        {provided.placeholder}
                        {snapshot.isDraggingOver && (
                            <DivColumnDropshadowSC
                                marginLeft={colDropshadowProps.marginLeft}
                                height={colDropshadowProps.height}
                                place={"column"}
                            />
                        )}
                    </DivBoardContainerSC>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default Board;
