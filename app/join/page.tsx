import React from "react";

import Footer from "../../src/components/homepage/Footer";
import JoinBody from "../../src/components/join/JoinBody";
import Navbar from "../../src/components/common/Navbar";

const Page = () => {
    return (
        <>
            <Navbar />
            <JoinBody />
            <Footer requiresPadding={false} />
        </>
    );
};

export default Page;
