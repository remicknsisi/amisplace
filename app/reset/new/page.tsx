import React from "react";

import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import Navbar from "../../../src/components/common/Navbar";
import Footer from "../../../src/components/homepage/Footer";
import NewPasswordBody from "../../../src/components/reset-request/NewPasswordBody";

const ResetNew = async () => {
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
            <NewPasswordBody />
            <Footer />
        </>
    );
};

export default ResetNew;
