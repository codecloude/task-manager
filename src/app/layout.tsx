import React from "react";
import ReduxProvider from "@/redux/provider";
import type { Metadata } from "next";
import ThemeProviderComp from "./themeProvider";
import { Inter, Roboto } from "next/font/google";
import Header from "../components/header";
import { DivWrapChildrenSC, DivWrapperSC, GlobalStyle } from "./globals";
import StyledComponentsRegistry from "@/lib/registry";

const inter = Inter({
    subsets: ["latin"],
    style: "normal",
    weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
    subsets: ["latin"],
    style: "normal",
    weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
    title: "Доски | ilyask",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} ${roboto.className}`}>
                <ReduxProvider>
                    <StyledComponentsRegistry>
                        <ThemeProviderComp>
                            <DivWrapperSC>
                                <Header />
                                <DivWrapChildrenSC>
                                    {children}
                                </DivWrapChildrenSC>
                            </DivWrapperSC>
                        </ThemeProviderComp>
                    </StyledComponentsRegistry>
                </ReduxProvider>
            </body>
        </html>
    );
}
