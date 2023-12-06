import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import React from "react";

import Navbar from "../../../src/components/common/Navbar";
import Footer from "../../../src/components/homepage/Footer";
import Layout from "../../../src/components/layout";
import NewPasswordResetBody from "../../../src/components/reset-request/NewPasswordResetBody";

const ResetSuccess = async () => {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const {
        data: { session },
    } = await supabase.auth.getSession();

    return (
        <>
            <Navbar session={session} requiresPadding={false} />
            <Layout>
                <NewPasswordResetBody />
            </Layout>
            <Footer />
        </>
    );
};

export default ResetSuccess;
