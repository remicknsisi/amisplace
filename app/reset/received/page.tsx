import React from "react";

import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

import Navbar from "../../../src/components/common/Navbar";
import Footer from "../../../src/components/homepage/Footer";
import RequestReceivedBody from "../../../src/components/reset-request/RequestReceivedBody";
import Layout from "../../../src/components/layout";

const ResetReceived = async () => {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const {
        data: { session },
    } = await supabase.auth.getSession();

    return (
        <>
            <Navbar session={session} requiresPadding={false} />
            <Layout>
                <RequestReceivedBody />
            </Layout>
            <Footer />
        </>
    );
};

export default ResetReceived;
