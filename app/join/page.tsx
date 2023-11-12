import React from "react";

import Footer from "../../src/components/homepage/Footer";
import JoinBody from "../../src/components/join/JoinBody";
import Navbar from "../../src/components/common/Navbar";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";

const Page = async () => {
    const cookieStore = cookies();
    const supabase = createServerComponentClient({
        cookies: () => cookieStore,
    });

    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (session) {
        redirect("/account");
    }
    return (
        <>
            <Navbar session={null} requiresPadding={false} />
            <JoinBody />
            <Footer requiresPadding={false} />
        </>
    );
};

export default Page;
