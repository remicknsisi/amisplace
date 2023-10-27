import React from "react";

import Footer from "../../src/components/homepage/Footer";
import ListingsBody from "../../src/components/listings/ListingsBody";
import ListingsHeader from "../../src/components/listings/ListingsHeader";
import Navbar from "../../src/components/common/Navbar";

const Listings = () => {
    return (
        <>
            <Navbar />
            <ListingsHeader />
            <ListingsBody />
            <Footer />
        </>
    );
};

export default Listings;
