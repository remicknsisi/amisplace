import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

import ListingsTable from "../../../src/components/admin/ListingsTable";
import Navbar from "../../../src/components/common/Navbar";
import Footer from "../../../src/components/homepage/Footer";

const EditListingsPage = async () => {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
        redirect("/login");
    }

    // const { data, error } = await supabase
    //     .from("profiles")
    //     .select("admin")
    //     .eq("id", session.user.id)
    //     .single();
    // if (error || !data?.admin) {
    //     redirect("/");
    // }

    const { data: listings, error: err } = await supabase
        .from("listings")
        .select();
    if (err) {
        console.log(`error fetching listings: ${err?.message}`);
    }

    const fetchedListings = listings || [];

    return (
        <>
            <Navbar session={session} />
            <ListingsTable listings={fetchedListings} />
            <Footer />
        </>
    );
};

export default EditListingsPage;
