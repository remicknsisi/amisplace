import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import React from "react";

import Navbar from "../../../src/components/common/Navbar";
import Footer from "../../../src/components/homepage/Footer";
import VerifyEmailBody from "../../../src/components/join/VerifyEmailBody";
import Layout from "../../../src/components/layout";

const VerifyEmail = async () => {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const {
        data: { session },
    } = await supabase.auth.getSession();

    return (
        <>
            <Navbar session={session} requiresPadding={false} />
            <Layout>
                <VerifyEmailBody />
            </Layout>
            <Footer />
        </>
    );
};

export default VerifyEmail;
