import React from "react";

import AboutBody from "../../src/components/about/AboutBody";
import Navbar from "../../src/components/common/Navbar";
import Footer from "../../src/components/homepage/Footer";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

const AboutPage = async () => {
    const cookieStore = cookies();
    const supabase = createServerComponentClient({
        cookies: () => cookieStore,
    });

    const {
        data: { session },
    } = await supabase.auth.getSession();

    return (
        <>
            <Navbar session={session} />
            <AboutBody />
            <Footer requiresPadding={false} />
        </>
    );
};

export default AboutPage;
