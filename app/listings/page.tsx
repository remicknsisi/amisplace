import React from "react";

import Footer from "../../src/components/homepage/Footer";
import ListingsBody from "../../src/components/listings/ListingsBody";
import ListingsHeader from "../../src/components/listings/ListingsHeader";
import Navbar from "../../src/components/common/Navbar";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";

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
    // This is where we can fetch our listings!
    return (
        <>
            <Navbar session={null} />
            <ListingsHeader />
            <ListingsBody />
            <Footer />
        </>
    );
};

export default Listings;
