import React from "react";

import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Page() {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
        // this is a protected route - only users who are signed in can view this route
        redirect("/");
    }

    const { data } = await supabase.from("profiles").select();
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
