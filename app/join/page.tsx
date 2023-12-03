import React from "react";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

import Footer from "../../src/components/homepage/Footer";
import JoinBody from "../../src/components/join/JoinBody";
import Navbar from "../../src/components/common/Navbar";
import Layout from "../../src/components/layout";

const Page = async () => {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (session) {
        redirect("/account");
    }
    return (
        <>
            <Navbar session={null} requiresPadding={true} />
            <Layout>
                <JoinBody />
            </Layout>
            <Footer requiresPadding={false} />
        </>
    );
};

export default Page;
