"use client";
import React, { useEffect, useState } from "react";
import { DivHomeNavSC, DivHomeWorkspacesSC, DivHomeWrapSC } from "./style.home";
import NavMenu from "@/components/nav-menu";
import { NavMenuSectionType } from "@/lib/types";
import WorkspacesBoard from "@/components/workspaces-board";

const Home = () => {
    const [section, setSection] = useState<NavMenuSectionType>("dashboards");

    return (
        <main>
            <DivHomeWrapSC>
                <DivHomeNavSC>
                    <NavMenu section={section} setSection={setSection} />
                </DivHomeNavSC>
                <DivHomeWorkspacesSC>
                    <WorkspacesBoard />
                </DivHomeWorkspacesSC>
                // test git auth
            </DivHomeWrapSC>
        </main>
    );
};

export default Home;
