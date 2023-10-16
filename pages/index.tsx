import React from "react";

import Benefits from "../src/components/homepage/Benefits";
import CTA from "../src/components/homepage/CTA";
import Hero from "../src/components/homepage/Hero";
import Listings from "../src/components/homepage/Listings";
import Navbar from "../src/components/common/Navbar";
import Process from "../src/components/homepage/Process";
import Types from "../src/components/homepage/Types";

export default function Homepage() {
    return (
        <>
            <Navbar />
            <Hero />
            <Benefits />
            <Listings />
            <Types />
            <Process />
            <CTA />
        </>
    );
}
