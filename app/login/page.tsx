import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

import Footer from "../../src/components/homepage/Footer";
import LoginBody from "../../src/components/login/LoginBody";
import Navbar from "../../src/components/common/Navbar";
import Layout from "../../src/components/layout";

export default async function Login() {
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
            <Navbar session={session} requiresPadding={true} />
            <Layout>
                <LoginBody />
            </Layout>
            <Footer />
        </>
    );
}
