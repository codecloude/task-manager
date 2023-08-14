import { BoardType } from "@/lib/types";
import { v4 } from "uuid";

export const testData: BoardType = {
    id: v4(),
    label: "FrontEnd",
    columns: [
        {
            id: v4(),
            label: "col1",
            tasks: [
                { content: "item1", id: v4(), created: new Date().toISOString() },
                { content: "item2", id: v4(), created: new Date().toISOString() },
                { content: "item3", id: v4(), created: new Date().toISOString() },
            ],
        },
        {
            id: v4(),
            label: "col2",
            tasks: [
                { content: "item1", id: v4(), created: new Date().toISOString() },
                { content: "item2", id: v4(), created: new Date().toISOString() },
                { content: "item3", id: v4(), created: new Date().toISOString() },
            ],
        },
        {
            id: v4(),
            label: "col3",
            tasks: [
                { content: "item1", id: v4(), created: new Date().toISOString() },
                { content: "item2", id: v4(), created: new Date().toISOString() },
                { content: "item3", id: v4(), created: new Date().toISOString() },
            ],
        },
        // {
        //     id: v4(),
        //     label: "col1",
        //     tasks: [
        //         { content: "item1", id: v4(), created: new Date().toISOString() },
        //         { content: "item2", id: v4(), created: new Date().toISOString() },
        //         { content: "item3", id: v4(), created: new Date().toISOString() },
        //     ],
        // },
        // {
        //     id: v4(),
        //     label: "col2",
        //     tasks: [
        //         { content: "item1", id: v4(), created: new Date().toISOString() },
        //         { content: "item2", id: v4(), created: new Date().toISOString() },
        //         { content: "item3", id: v4(), created: new Date().toISOString() },
        //     ],
        // },
        // {
        //     id: v4(),
        //     label: "col3",
        //     tasks: [
        //         { content: "item1", id: v4(), created: new Date().toISOString() },
        //         { content: "item2", id: v4(), created: new Date().toISOString() },
        //         { content: "item3", id: v4(), created: new Date().toISOString() },
        //     ],
        // },
        // {
        //     id: v4(),
        //     label: "col1",
        //     tasks: [
        //         { content: "item1", id: v4(), created: new Date().toISOString() },
        //         { content: "item2", id: v4(), created: new Date().toISOString() },
        //         { content: "item3", id: v4(), created: new Date().toISOString() },
        //     ],
        // },
        // {
        //     id: v4(),
        //     label: "col2",
        //     tasks: [
        //         { content: "item1", id: v4(), created: new Date().toISOString() },
        //         { content: "item2", id: v4(), created: new Date().toISOString() },
        //         { content: "item3", id: v4(), created: new Date().toISOString() },
        //     ],
        // },
        // {
        //     id: v4(),
        //     label: "col3",
        //     tasks: [
        //         { content: "item1", id: v4(), created: new Date().toISOString() },
        //         { content: "item2", id: v4(), created: new Date().toISOString() },
        //         { content: "item3", id: v4(), created: new Date().toISOString() },
        //     ],
        // },
        // {
        //     id: v4(),
        //     label: "col1",
        //     tasks: [
        //         { content: "item1", id: v4(), created: new Date().toISOString() },
        //         { content: "item2", id: v4(), created: new Date().toISOString() },
        //         { content: "item3", id: v4(), created: new Date().toISOString() },
        //     ],
        // },
        // {
        //     id: v4(),
        //     label: "col2",
        //     tasks: [
        //         { content: "item1", id: v4(), created: new Date().toISOString() },
        //         { content: "item2", id: v4(), created: new Date().toISOString() },
        //         { content: "item3", id: v4(), created: new Date().toISOString() },
        //     ],
        // },
        // {
        //     id: v4(),
        //     label: "col3",
        //     tasks: [
        //         { content: "item1", id: v4(), created: new Date().toISOString() },
        //         { content: "item2", id: v4(), created: new Date().toISOString() },
        //         { content: "item3", id: v4(), created: new Date().toISOString() },
        //     ],
        // },
    ],
};
