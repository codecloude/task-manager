export type DashboardItemType = {
    params: {
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
    url: string | "/workspace/dashboard/";
    tasks?: TaskType[];
};

export type TaskType = {
    id: string;
    label: string;
    created: Date;
    date: Date;
};

export type CreateWorkspacePropsType = {
    setOpen: (value: boolean) => void;
};
