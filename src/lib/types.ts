export type DashboardItemType = {
    params: {
        id: string;
    };
};

export type CustomMenuPropsType = {
    label: string | "label";
    items: CustomMenuItemsType[]
}

export type CustomMenuItemsType = {
    label: string;
    url: string;
}

