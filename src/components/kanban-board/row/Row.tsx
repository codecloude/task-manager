"use client";

import React from "react";
import { Draggable, DraggableProvided } from "react-beautiful-dnd";
import { TaskType } from "@/lib/types";
import { Container } from "./style.row";

type Props = {
    task: TaskType;
    index: number;
};

const Row: React.FC<Props> = ({ task, index }) => (
    <Draggable draggableId={task.id} index={index}>
        {(provided: DraggableProvided) => (
            <Container
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
            >
                {task.content}
            </Container>
        )}
    </Draggable>
);

export default Row;
