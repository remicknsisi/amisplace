import React from "react";

import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

import Navbar from "../../src/components/common/Navbar";
import Footer from "../../src/components/homepage/Footer";
import ApplicationBody from "../../src/components/application/ApplicationBody";
import { redirect } from "next/navigation";
import { profilePartialSchema } from "@/utils/zod-schemas/profile";
import { nullsToUndefined } from "@/utils/helpers";

const Application = async () => {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
        redirect("/login");
    }

    const { data: profile, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session.user.id)
        .single();

    if (error) {
        console.log("TODO: handle error", error);
        redirect("/error");
    }

    // This is an attempt to limit what data is passed to the client using Zod (DTO)
    // TODO: figure out how to make this smoother
    const profileParsed = profilePartialSchema.parse(nullsToUndefined(profile));

    return (
        <>
            <Navbar session={session} requiresPadding={false} />
            <ApplicationBody profile={profileParsed} />
            <Footer />
        </>
    );
};

export default Application;
