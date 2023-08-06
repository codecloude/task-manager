import React from "react";
import { DashboardItemType } from "@/lib/types";

const DashboardItem = (props: DashboardItemType) => {
    const { params } = props;
    return <div>DashboardItem {params.id}</div>;
};

export default DashboardItem;
