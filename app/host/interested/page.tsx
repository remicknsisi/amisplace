import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import React from "react";

import Navbar from "../../../src/components/common/Navbar";
import Footer from "../../../src/components/homepage/Footer";
import InterestedBody from "../../../src/components/host/InterestedBody";
import Layout from "../../../src/components/layout";

const HostingInterested = async () => {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const {
        data: { session },
    } = await supabase.auth.getSession();

    return (
        <>
            <Navbar session={session} requiresPadding={false} />
            <Layout>
                <InterestedBody />
            </Layout>
            <Footer />
        </>
    );
};

export default HostingInterested;
