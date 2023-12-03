import React from "react";

import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

import Navbar from "../../../src/components/common/Navbar";
import Footer from "../../../src/components/homepage/Footer";
import ResetRequestBody from "../../../src/components/reset-request/ResetRequestBody";
import Layout from "../../../src/components/layout";

const Reset = async () => {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const {
        data: { session },
    } = await supabase.auth.getSession();

    return (
        <>
            <Navbar session={session} requiresPadding={false} />
            <Layout>
                <ResetRequestBody />
            </Layout>
            <Footer />
        </>
    );
};

export default Reset;
