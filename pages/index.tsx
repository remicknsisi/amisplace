import React from "react";

import Benefits from "../src/components/homepage/Benefits";
import Hero from "../src/components/homepage/Hero";
import Navbar from "../src/components/common/Navbar";

export default function Homepage() {
    return (
        <>
            <Navbar />
            <Hero />
            <Benefits />
        </>
    );
}
