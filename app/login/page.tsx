import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

import Navbar from "../../src/components/common/Navbar";
import Footer from "../../src/components/homepage/Footer";
import Layout from "../../src/components/layout";
import LoginBody from "../../src/components/login/LoginBody";

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
