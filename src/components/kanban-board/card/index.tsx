"use client";

import { Card } from "@/lib/interfaces";
import styled from "styled-components";
import { DivCardWrapperSC } from "./style.card";



interface CardProps {
    card: Card;
}

const CardComponent = ({ card }: CardProps) => {
    return (
        <DivCardWrapperSC>
            <h4>{card.title}</h4>
            <p>{card.description}</p>
        </DivCardWrapperSC>
    );
};

export default CardComponent;
