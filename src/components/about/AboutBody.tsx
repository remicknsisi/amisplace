"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import TravelButton from "../common/TravelButton";

const AboutBody = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Update the state (classes) after the component has mounted
        setIsLoaded(true);
    }, []);
    return (
        <div className="px-5 md:px-8 lg:px-16">
            <div className="mx-auto w-full max-w-[80rem]">
                <div className="grid-cols-1fr mb-28 grid items-center justify-center gap-x-10 gap-y-12 pt-16 lg:grid-cols-[1fr,1fr]">
                    <div className="flex max-w-[32rem] flex-col items-center justify-center lg:mt-[6.25rem] lg:items-start">
                        <h1 className="mb-6 text-[2rem] font-bold md:mb-4 md:text-[2.5rem]">
                            About us
                        </h1>
                        <p className=";g:tracking-wide mb-8 text-lg font-light">
                            We’re Amy and Adrien, a wife and husband team with a
                            love for travel and sharing our home with visiting
                            friends. We wanted to find a way for visitors to
                            enjoy our home even while we’re traveling and make
                            back some of the rent money we would have otherwise
                            lost.
                        </p>
                        <p className="mb-8 text-lg font-light lg:tracking-wide">
                            So in 2019 we created Amisplace: an invite-only
                            community that offers affordable short-term stays
                            amongst friends.
                        </p>
                        <p className="mb-8 text-lg font-light lg:tracking-wide">
                            We’re excited that you’re interested in joining us!
                            Please don’t hesitate to reach out at{" "}
                            <a
                                href="mailto:contact@amisplace.com"
                                className="text-green underline"
                            >
                                contact@amisplace.com
                            </a>{" "}
                            with any questions.
                        </p>
                        <div className="mb-16 w-full font-light tracking-wide">
                            <p className="text-lg">– Amy & Adrien</p>
                        </div>
                        <TravelButton />
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 0.75 }}
                        className="order-first mt-[3.5rem] max-h-[20rem] max-w-[20rem] self-center justify-self-center overflow-hidden rounded-2xl md:max-h-[26rem] md:max-w-[26rem] lg:order-last lg:mt-0 lg:max-h-[32rem] lg:max-w-[32rem]"
                    >
                        <img
                            src="/assets/amy-adrien.jpeg"
                            alt="Amy and Adrien from Amisplace."
                        />
                    </motion.div>
                    <div className="absolute inset-y-0 left-auto right-0 z-[-1] h-[75rem] opacity-100 md:h-[80rem] lg:h-full">
                        <div className="relative right-0 h-full w-[56rem]">
                            <img
                                src="/assets/decorative-ring.svg"
                                alt="Background ring"
                                className={`h-full w-full origin-top object-cover transition-opacity duration-1000 md:object-left-top${
                                    isLoaded
                                        ? "scale-y-100 opacity-100"
                                        : "scale-y-70 opacity-0"
                                }`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutBody;
