"use client";

import {
    CSSMarginProperties,
    ColDropshadow,
    ColumnDropshadowProps,
    ColumnType,
    DragDropContextProps,
    DragDropProps,
    RowDropshadow,
    RowDropshadowProps,
} from "@/lib/types";
import React, { useContext, useState } from "react";
import { DragStart, DraggableId, DropResult } from "react-beautiful-dnd";
import { v4 } from "uuid";

const DragDropContext = React.createContext<DragDropContextProps | undefined>(
    undefined
);

// grabbing element currently being dragged from the dom
const getDraggedElement = (draggableId: DraggableId) => {
    const queryAttr = "data-rbd-drag-handle-draggable-id";
    const domQuery = `[${queryAttr}='${draggableId}']`;
    const draggedElement = document.querySelector(domQuery);
    return draggedElement;
};

// updating the array of the placeholder by switching out the source and destination colIndex
const getUpdatedChildrenArray = (
    draggedElement: HTMLElement,
    destinationIndex: number,
    sourceIndex: number
) => {
    // grab children of the node and convert it to an array
    const childrenArray: HTMLElement[] = Array.from(
        draggedElement!.parentNode!.children as HTMLCollectionOf<HTMLElement>
    );

    // if the indexes are the same (onDragStart) just return the array
    if (destinationIndex === sourceIndex) return childrenArray;

    // get the div of item being dragged
    const draggedItem = childrenArray[sourceIndex];

    // remove source
    childrenArray.splice(sourceIndex, 1);

    // return updated array by inputting dragged item
    return childrenArray.splice(0, destinationIndex, draggedItem);
};

// isolate the number of style desired to pass as props

const getStyle = (
    updatedChildrenArray: HTMLElement[],
    destinationIndex: number,
    property: CSSMarginProperties,
    clientDirection: "clientHeight" | "clientWidth"
) =>
    updatedChildrenArray.slice(0, destinationIndex).reduce((total, curr) => {
        // get the style object of the item
        const style = window.getComputedStyle(curr);
        // isolate the # of the property desired
        const prop = parseFloat(style[property]);
        // return total + curr[clientDirection] + prop;
        return (
            total +
            (clientDirection === "clientHeight"
                ? curr.clientHeight
                : curr.clientWidth) +
            prop
        );
    }, 0);

const DragDropProvider: React.FC<{
    data: ColumnType[] | [];
    children: React.ReactNode;
}> = ({ children, data }) => {
    const [columns, setColumns] = useState<ColumnType[]>(data);
    const [colDropshadowProps, setColDropshadowProps] = useState<ColDropshadow>(
        {
            marginLeft: 0,
            height: 0,
        }
    );
    const [rowDropshadowProps, setRowDropshadowProps] = useState<RowDropshadow>(
        {
            marginTop: 0,
            height: 0,
        }
    );

    // handling movement of row in the same column
    // [[],[]],[]
    const moveRowSameColumn: DragDropProps = (source, destination) => {
        // moving tasks in same column
        setColumns((prev) => {
            const updated = [...prev];
            // isolate the row of the column we want to adjust
            const [{ tasks }] = updated.filter(
                ({ id }) => id === source.droppableId
            );
            // remove the source item
            const [removed] = tasks.splice(source.index, 1);
            // insert the source item at the new colIndex
            tasks.splice(destination.index, 0, removed);
            return updated;
        });
    };

    // handling movement of row between columns
    const moveRowDifferentColumn: DragDropProps = (source, destination) => {
        // moving tasks between columns
        setColumns((prev) => {
            // filter out which column is the source and which is the destination
            const updated = [...prev];
            const [sourceColumn] = updated.filter(
                ({ id }) => id === source.droppableId
            );
            const [destinationColumn] = updated.filter(
                ({ id }) => id === destination.droppableId
            );

            // extract the tasks from the columnn
            const sourceRow = sourceColumn.tasks;
            const destinationRow = destinationColumn.tasks;

            // remove the source item
            const [removed] = sourceRow.splice(source.index, 1);
            // insert the source item at the new colIndex
            destinationRow.splice(destination.index, 0, removed);

            return updated;
        });
    };

    // determining if its diff col or same col for row movement
    const handleRowMove: DragDropProps = (source, destination) => {
        // droppableId is in reference to what column it is so if they are the same,
        // then both droppableId's are the same,
        // if its diff columns then they not the same
        // btw since columns are dynamically instantiated, the droppableId i used is uuid

        if (source.droppableId !== destination.droppableId) {
            moveRowDifferentColumn(source, destination);
        } else {
            moveRowSameColumn(source, destination);
        }
    };

    // move columns
    const handleColumnMove: DragDropProps = (source, destination) =>
        // rememeber that source and dest are just { draggableId, index }
        // moving columns (:
        setColumns((prev) => {
            const updated = [...prev];
            // remove source column
            const [removed] = updated.splice(source.index, 1);
            // insert source column at new destination
            updated.splice(destination.index, 0, removed);
            return updated;
        });

    const handleDropshadowRow: RowDropshadowProps = (
        event,
        destinationIndex,
        sourceIndex
    ) => {
        // isolating the element being dragged
        const draggedElement = getDraggedElement(event.draggableId);
        // if we aint draggin anything return
        if (!draggedElement) return;
        // isolate the height of element to determine the height of element being dragged
        const { clientHeight } = draggedElement as Element;
        // returning the manipulated array of dom elements
        const updatedChildrenArray: HTMLElement[] = getUpdatedChildrenArray(
            draggedElement as HTMLElement,
            destinationIndex,
            sourceIndex
        );
        // grabbing the # for marginTop
        const marginTop = getStyle(
            updatedChildrenArray,
            destinationIndex,
            "marginBottom",
            "clientHeight"
        );
        // setting our props
        setRowDropshadowProps({
            height: clientHeight + 2,
            marginTop: marginTop + 2 * destinationIndex,
        });
    };

    const handleDropshadowColumn: ColumnDropshadowProps = (
        event,
        destinationIndex,
        sourceIndex
    ) => {
        // isolate element we are dragging
        const draggedElement: Element | Node | null = getDraggedElement(
            event.draggableId
        )!.parentNode!.parentNode;
        // if nothing is being dragged return
        if (!draggedElement) return;
        // isolate the height of element to determine the height of element being dragged
        const { clientHeight } = draggedElement as Element;
        // returning the manipulated array of dom elements
        const updatedChildrenArray: HTMLElement[] = getUpdatedChildrenArray(
            draggedElement as HTMLElement,
            destinationIndex,
            sourceIndex
        );
        // grabbing the # for marginLeft
        const marginLeft = getStyle(
            updatedChildrenArray,
            destinationIndex,
            "marginRight",
            "clientWidth"
        );
        // setting props
        setColDropshadowProps({
            height: clientHeight,
            marginLeft,
        });
    };

    const handleDragUpdate = (event: DropResult) => {
        const { source, destination } = event;
        if (!destination) return;
        if (event.type === "column") {
            handleDropshadowColumn(event, destination.index, source.index);
        } else {
            handleDropshadowRow(event, destination.index, source.index);
        }
    };

    const handleDragStart = (event: DragStart) => {
        // the destination and source colIndex will be the same for start
        const { index } = event.source;
        if (event.type === "column") {
            handleDropshadowColumn(event, index, index);
        } else {
            handleDropshadowRow(event, index, index);
        }
    };

    const handleDragEnd = (result: DropResult) => {
        // if there is no destination, theres nothing to manipulate so lets
        // nope out of there REAL quick
        if (!result.destination) return;
        // we only care about source and destination so lets just grab those
        const { source, destination } = result;
        // if our droppableId is all-columns that means that we are
        // dragging columns around because remember we did not have to
        // dynamically instantiate our top level droppable so we hard coded
        // the id
        if (source.droppableId === "all-columns") {
            // we go this function to handle the column movement
            handleColumnMove(source, destination);
        } else {
            // else its a row move so we go here
            handleRowMove(source, destination);
        }
    };

    const handleDeleteColumn = (colIndex: number) =>
        setColumns((prev) => {
            const updated = [...prev];
            updated.filter((dat, rowIndex) => rowIndex !== colIndex);
            return updated;
        });

    const onSubmit = (newRow: string, colIndex: number) => {
        const currentDate = new Date().toISOString(); // Возвращает текущую дату и время в формате ISO string

        setColumns((prev) => {
            const updated = [...prev];
            updated[colIndex].tasks.push({
                content: newRow,
                id: v4(),
                created: currentDate,
                // Если вы хотите добавить поле date, добавьте его здесь
            });
            return updated;
        });
    };

    const handleRemoveTask = (rowIndex: number, colIndex: number) => {
        setColumns((prev) => {
            const updated = [...prev];
            updated[colIndex].tasks.splice(rowIndex, 1);
            return updated;
        });
    };

    const handleDuplicateTask = (rowIndex: number, colIndex: number) => {
        setColumns((prev) => {
            const updated = [...prev];
            updated[colIndex].tasks.push({
                content: updated[colIndex].tasks[rowIndex].content,
                id: v4(),
                created: updated[colIndex].tasks[rowIndex].created,
            });
            return updated;
        });
    };

    const handleNewColumn = (newName: string) => {
        setColumns((prev) => {
            const updated = [...prev];
            return [
                ...updated,
                {
                    id: v4(),
                    label: newName,
                    tasks: [],
                },
            ];
        });
    };

    return (
        <DragDropContext.Provider
            value={{
                onSubmit,
                handleDuplicateTask,
                handleNewColumn,
                handleRemoveTask,
                handleDeleteColumn,
                handleDragEnd,
                handleDragStart,
                handleDragUpdate,
                rowDropshadowProps,
                colDropshadowProps,
                columns,
                setColumns,
            }}
        >
            {children}
        </DragDropContext.Provider>
    );
};

export function useDragDrop() {
    const context = useContext(DragDropContext);
    if (context === undefined) {
        throw new Error("useDragDrop must be used inside DragDropProvider");
    }

    return context;
}

export default DragDropProvider;
