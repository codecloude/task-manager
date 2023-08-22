"use client";

import React from "react";
import { Draggable, DraggableProvided } from "react-beautiful-dnd";
import { TaskType } from "@/lib/types";
import { DivRowContainerSC } from "./style.row";
import { useAppSelector } from "@/redux/store";

type Props = {
    task: TaskType;
    index: number;
};

const Row = (props: Props) => {
    const { task, index } = props;
    const mode = useAppSelector((state) => state.themeModeReducer);

    return (
        <>
            <Draggable draggableId={task.id} index={index}>
                {(provided: DraggableProvided) => (
                    <DivRowContainerSC
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        mode={mode}
                    >
                        {task.task}
                    </DivRowContainerSC>
                )}
            </Draggable>
        </>
    );
};

export default Row;
