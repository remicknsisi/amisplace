import React from "react";

import type { AppProps } from "next/app";
import { Nunito } from "next/font/google";

import "../styles.css";

const nunito = Nunito({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-nunito",
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={nunito.className}>
            <Component {...pageProps} />
        </main>
    );
}
