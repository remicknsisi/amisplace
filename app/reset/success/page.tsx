import React from "react";

import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import Navbar from "../../../src/components/common/Navbar";
import Footer from "../../../src/components/homepage/Footer";
import NewPasswordResetBody from "../../../src/components/reset-request/NewPasswordResetBody";

const ResetSuccess = async () => {
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
            <NewPasswordResetBody />
            <Footer />
        </>
    );
};

export default ResetSuccess;
