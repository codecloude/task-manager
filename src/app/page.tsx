"use client";

import { useAppSelector } from "@/redux/store";
import React, { useEffect } from "react";

export default function Home() {
    const themeMode = useAppSelector((state) => state.themeModeReducer);

    // console.log("home", themeMode);

    return <main>ghb</main>;
}
