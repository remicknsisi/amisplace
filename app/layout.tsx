import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import React from "react";

import "../styles.css";

const nunito = Nunito({
    weight: ["300", "400", "700"],
    subsets: ["latin"],
    variable: "--font-nunito",
});

export const metadata: Metadata = {
    title: "Amisplace - Travel community",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={nunito.className}>{children}</body>
        </html>
    );
}
