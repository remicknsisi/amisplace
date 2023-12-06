import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import React from "react";

import Navbar from "../../../src/components/common/Navbar";
import Footer from "../../../src/components/homepage/Footer";
import AboutHomeBody from "../../../src/components/host/AboutHomeBody";
import Layout from "../../../src/components/layout";

const AboutHome = async () => {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const {
        data: { session },
    } = await supabase.auth.getSession();

    return (
        <>
            <Navbar session={session} requiresPadding={false} />
            <Layout>
                <AboutHomeBody />
            </Layout>
            <Footer />
        </>
    );
};

export default AboutHome;
