"use client";
import React, { useEffect, useState } from "react";
import { DivHomeNavSC, DivHomeWorkspacesSC, DivHomeWrapSC } from "./style.home";
import NavMenu from "@/components/nav-menu";
import { NavMenuSectionType } from "@/lib/types";

const Home = () => {
    const [section, setSection] = useState<NavMenuSectionType>("dashboards");

    return (
        <main>
            <DivHomeWrapSC>
                <DivHomeNavSC>
                    <NavMenu section={section} setSection={setSection}/>
                </DivHomeNavSC>
                <DivHomeWorkspacesSC></DivHomeWorkspacesSC>
            </DivHomeWrapSC>
        </main>
    );
};

export default Home;
