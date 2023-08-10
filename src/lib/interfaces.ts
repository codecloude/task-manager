export interface Card {
    id: string;
    title: string;
    description: string;
}

export interface Column {
    id: string;
    title: string;
    cards: Card[];
}

export interface KanbanBoard {
    id: string;
    label: string;
    columns: Column[];
}

export interface KanbanProps {
    card: Card;
}
