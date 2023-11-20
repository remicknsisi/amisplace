import React from "react";

import Footer from "../../../src/components/homepage/Footer";
import ListingsTable from "../../../src/components/admin/ListingsTable";
import Navbar from "../../../src/components/common/Navbar";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

const EditListingsPage = async () => {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
        redirect("/login");
    }

    const { data: listings, error } = await supabase.from("listings").select();
    if (error) {
        console.log(`error fetching listings: ${error.message}`);
    }

    return (
        <>
            <Navbar session={session} />
            <ListingsTable listings={listings}/>
            <Footer />
        </>
    );
};

export default EditListingsPage;