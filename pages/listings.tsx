import React from "react";

import ListingsBody from "../src/components/listings/ListingsBody";
import ListingsHeader from "../src/components/listings/ListingsHeader";
import Navbar from "../src/components/common/Navbar";

const Listings = () => {
    return (
        <div>
            <Navbar />
            <ListingsHeader />
            <ListingsBody />
        </div>
    );
};

export default Listings;
