import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import React from "react";

import AboutBody from "../../src/components/about/AboutBody";
import Navbar from "../../src/components/common/Navbar";
import Footer from "../../src/components/homepage/Footer";

const AboutPage = async () => {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

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
