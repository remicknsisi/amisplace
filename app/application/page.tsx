import React from "react";

import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

import Navbar from "../../src/components/common/Navbar";
import Footer from "../../src/components/homepage/Footer";
import ApplicationBody from "../../src/components/application/ApplicationBody";

const Application = async () => {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const {
        data: { session },
    } = await supabase.auth.getSession();

    return (
        <>
            <Navbar session={session} requiresPadding={false} />
            <ApplicationBody />
            <Footer />
        </>
    );
};

export default Application;
