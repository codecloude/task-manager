import { DragStart, DraggableLocation, DropResult } from "react-beautiful-dnd";

export type DashboardItemType = {
    params?: {
        id: string;
    };
};

export type CustomMenuPropsType = {
    label: string | "label";
    items: CustomMenuItemsType[];
};

export type CustomMenuItemsType = {
    label: string;
    url: string;
};

export type NavMenuSectionType = "dashboards" | "templates";

export type NavMenuPropsType = {
    section: NavMenuSectionType;
    setSection: (value: NavMenuSectionType) => void;
};

export type WorkspaceType = {
    id?: number;
    label: string;
    boards?: BoardType[];
};

export type TaskType = {
    id: string;
    content: string;
    created: string;
    date?: string;
};

export type CreateWorkspacePropsType = {
    setOpen: (value: boolean) => void;
};

export type ColumnType = {
    id: string;
    label: string;
    tasks: TaskType[];
};

export type BoardType = {
    id: string;
    label: string;
    columns: ColumnType[];
};

export type DragDropProps = (
    source: DraggableLocation,
    destination: DraggableLocation
) => void;

// handle the manipulation of placeholder for row
export type RowDropshadowProps = (
    event: any,
    destinationIndex: number,
    sourceIndex: number
) => void;

// handle the manipulation of placeholder for column
export type ColumnDropshadowProps = (
    event: DragStart,
    destinationIndex: number,
    sourceIndex: number
) => void;

export type RowDropshadow = { marginTop: number; height: number };

export type ColDropshadow = { marginLeft: number; height: number };

export type DragDropContextProps = {
    onSubmit: (newRow: string, colIndex: number) => void;
    handleDuplicateTask: (rowIndex: number, colIndex: number) => void;
    handleNewColumn: (newName: string) => void;
    handleRemoveTask: (rowIndex: number, colIndex: number) => void;
    handleDeleteColumn: (colIndex: number) => void;
    handleDragEnd: (result: DropResult) => void;
    handleDragStart: (event: DragStart) => void;
    handleDragUpdate: (event: any) => void;
    rowDropshadowProps: RowDropshadow;
    colDropshadowProps: ColDropshadow;
    columns: ColumnType[];
    setColumns: React.Dispatch<React.SetStateAction<ColumnType[]>>;
};

export type CSSMarginProperties =
    | "marginBottom"
    | "marginTop"
    | "marginLeft"
    | "marginRight"; // Добавьте другие свойства по мере необходимости

export type PlaceBoardType = "column" | "card"
