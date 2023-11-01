import React from "react";

import AboutBody from "../../src/components/about/AboutBody";
import Navbar from "../../src/components/common/Navbar";
import Footer from "../../src/components/homepage/Footer";

const AboutPage = () => {
    return (
        <>
            <Navbar />
            <AboutBody />
            <Footer requiresPadding={false} />
        </>
    );
};

export default AboutPage;
