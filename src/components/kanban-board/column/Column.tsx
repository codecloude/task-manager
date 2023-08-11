"use client";

import React, { useEffect } from "react";
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
    ColumnContainerSC,
    DropshadowContainer,
    DivRowContainerSC,
    RowDropshadow,
    DivLabelColumnSC,
    DivLabelContainerSC,
} from "./style.column";
import { Button } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

type Props = {
    column: ColumnType;
    columnIndex: number;
};

const styleButton = {
    justifyContent: "start",
    ":hover": { borderRadius: "8px" },
    fontWeight: 400,
    textTransform: "none",
    fontSize: "16px"
};

const Column: React.FC<Props> = ({ column, columnIndex }) => {
    const { rowDropshadowProps } = useDragDrop();

    return (
        <Draggable draggableId={column.id} index={columnIndex}>
            {(provided: DraggableProvided) => (
                <ColumnContainerSC
                    {...provided.draggableProps}
                    ref={provided.innerRef}
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
                            <DivRowContainerSC
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
                                <DropshadowContainer>
                                    {snapshot.isDraggingOver && (
                                        <RowDropshadow
                                            marginTop={
                                                rowDropshadowProps.marginTop
                                            }
                                            height={rowDropshadowProps.height}
                                        />
                                    )}
                                </DropshadowContainer>
                            </DivRowContainerSC>
                        )}
                    </Droppable>
                    <Button
                        variant="text"
                        color="inherit"
                        sx={styleButton}
                        startIcon={<AddRoundedIcon />}
                    >
                        Добавить карточку
                    </Button>
                </ColumnContainerSC>
            )}
        </Draggable>
    );
};

export default Column;
