"use client";

import styled from "styled-components";
import CardComponent from "../card";
import { Column } from "@/lib/interfaces";
import { DivColumnWrapperSC } from "./style.column";



interface ColumnProps {
    column: Column;
}

const ColumnComponent = ({ column }: ColumnProps) => {
    return (
        <DivColumnWrapperSC>
            <h2>{column.title}</h2>
            {column.cards.map((card) => (
                <CardComponent key={card.id} card={card} />
            ))}
        </DivColumnWrapperSC>
    );
};

export default ColumnComponent;
