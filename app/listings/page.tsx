import React from "react";

import Footer from "../../src/components/homepage/Footer";
import ListingsBody from "../../src/components/listings/ListingsBody";
import ListingsHeader from "../../src/components/listings/ListingsHeader";
import Navbar from "../../src/components/common/Navbar";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import type { Database } from "@/lib/database.types";

const Listings = async () => {
    const cookieStore = cookies();
    const supabase = createServerComponentClient({
        cookies: () => cookieStore,
    });

    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
        redirect("/login");
    }

    // Not sure how to get the types to work better
    const { data, error } = await supabase.from("listings").select();
    type Listings = Database["public"]["Tables"]["listings"]["Row"][];
    const listings: Listings = data as Listings;
    if (error) {
        console.log(`error fetching listings: ${error.message}`);
    }
    return (
        <>
            <Navbar session={session} />
            <ListingsHeader />
            <ListingsBody listings={listings} />
            <Footer />
        </>
    );
};

export default Listings;
