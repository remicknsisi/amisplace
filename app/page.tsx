import React from "react";

import Benefits from "../src/components/homepage/Benefits";
import CTA from "../src/components/homepage/CTA";
import FAQs from "../src/components/homepage/FAQs";
import Footer from "../src/components/homepage/Footer";
import Hero from "../src/components/homepage/Hero";
import Listings from "../src/components/homepage/Listings";
import Navbar from "../src/components/common/Navbar";
import Process from "../src/components/homepage/Process";
import Types from "../src/components/homepage/Types";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function Homepage() {
    const cookieStore = cookies();
    const supabase = createServerComponentClient({
        cookies: () => cookieStore,
    });

    const {
        data: { session },
    } = await supabase.auth.getSession();

    return (
        <>
            <Navbar requiresPadding={false} session={session} />
            <Hero />
            <Benefits />
            <Listings />
            <Types />
            <Process />
            <CTA />
            <FAQs />
            <Footer />
        </>
    );
}
