"use client";

import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Column from "../column/Column";
import { useDragDrop } from "../DragDropProvider";
import { ColumnDropshadow, BoardContainerSC } from "./style.board";

const Board: React.FC = () => {
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
                    <BoardContainerSC
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
                        {/* {snapshot.isDraggingOver && (
                            <ColumnDropshadow
                                marginLeft={colDropshadowProps.marginLeft}
                                height={colDropshadowProps.height}
                            />
                        )} */}
                    </BoardContainerSC>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default Board;
