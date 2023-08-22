"use client";

import React, { useEffect, useRef, useState } from "react";
import {
    Draggable,
    DraggableProvided,
    Droppable,
    DroppableProvided,
    DroppableStateSnapshot,
} from "react-beautiful-dnd";
import { ColumnType } from "@/lib/types";
import { useDragDrop } from "../DragDropProvider";
import { Row } from "../row";
import {
    DivColumnContainerSC,
    DivDropshadowRowSC,
    DivRowsWrapperSC,
    RowDropshadow,
    DivLabelColumnSC,
    DivLabelContainerSC,
} from "./style.column";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useAppSelector } from "@/redux/store";
import { Button } from "@mui/material";
import { CreateRow } from "./create-row";

type Props = {
    column: ColumnType;
    columnIndex: number;
};

const Column = (props: Props) => {
    const { column, columnIndex } = props;
    const mode = useAppSelector((state) => state.themeModeReducer);
    const { rowDropshadowProps } = useDragDrop();

    // const styleButton = {
    //     justifyContent: "start",
    //     ":hover": { borderRadius: "6px" },
    //     fontWeight: 400,
    //     textTransform: "none",
    //     fontSize: "16px",
    // };

    return (
        <Draggable draggableId={column.id} index={columnIndex}>
            {(provided: DraggableProvided) => (
                <DivColumnContainerSC
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    mode={mode}
                >
                    <DivLabelContainerSC>
                        <DivLabelColumnSC {...provided.dragHandleProps}>
                            {column.label}
                        </DivLabelColumnSC>
                    </DivLabelContainerSC>
                    <Droppable droppableId={column.id} type="task">
                        {(
                            prov: DroppableProvided,
                            snapshot: DroppableStateSnapshot
                        ) => (
                            <DivRowsWrapperSC
                                ref={prov.innerRef}
                                {...prov.droppableProps}
                            >
                                {column.tasks.map((task, taskIndex) => (
                                    <Row
                                        key={task.id}
                                        task={task}
                                        index={taskIndex}
                                    />
                                ))}
                                {prov.placeholder}
                                <DivDropshadowRowSC>
                                    {snapshot.isDraggingOver && (
                                        <RowDropshadow
                                            marginTop={
                                                rowDropshadowProps.marginTop
                                            }
                                            height={rowDropshadowProps.height}
                                            place={"card"}
                                        />
                                    )}
                                </DivDropshadowRowSC>
                            </DivRowsWrapperSC>
                        )}
                    </Droppable>
                    <CreateRow columnIndex={columnIndex} />
                </DivColumnContainerSC>
            )}
        </Draggable>
    );
};

export default Column;
