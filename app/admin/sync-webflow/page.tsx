import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

import WebflowSync from "../../../src/components/admin/WebflowSync";
import Navbar from "../../../src/components/common/Navbar";
import Footer from "../../../src/components/homepage/Footer";

export default async function AdminPage() {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
        redirect("/login");
    }

    const { data, error } = await supabase
        .from("profiles")
        .select("admin")
        .eq("id", session.user.id)
        .single();
    if (error || !data?.admin) {
        redirect("/");
    }

    return (
        <>
            <Navbar requiresPadding={true} session={session} />
            <WebflowSync />
            <Footer />
        </>
    );
}
