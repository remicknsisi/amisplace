"use client";

import React from "react";

import { poppins } from "../../helpers/loadFont";

const ListingsHeader = () => {
    return (
        <>
            <div className="bg-lightGreen-50">
                <div className="px-10">
                    <div className="mx-auto flex w-full max-w-[80rem] flex-col items-center justify-center pb-8 pt-24 text-center">
                        <h1
                            className={`mb-4 text-[2.25rem] lg:text-[2.5rem] ${poppins.className}`}
                        >
                            Available homes
                        </h1>
                        <div className="max-w-[40rem]">
                            <p className="text-lg font-light lg:text-xl">
                                To book a home, email{" "}
                                <a
                                    href="mailto:concierge@amisplace.com?subject=Book%20Home"
                                    className="text-green"
                                >
                                    concierge@amisplace.com
                                </a>{" "}
                                and our team will assist you.
                            </p>
                            <p className="mt-6 text-lg font-light lg:text-xl">
                                For hosts:&nbsp;
                                <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSc93LJlhhkQNBgC_v0UzKN2lbTvbL4A_jBUcnUKTjZQ0Pzb9w/viewform?usp=sf_link"
                                    className="text-green underline"
                                >
                                    List your home
                                </a>
                                &nbsp;or&nbsp;
                                <a
                                    href="http://www.amisplace.com/host"
                                    className="text-green underline"
                                >
                                    Update home availability
                                </a>
                            </p>
                        </div>
                        <div className="mb-6 mt-12 transition duration-200 ease-in-out hover:scale-105">
                            <a
                                href="mailto:concierge@amisplace.com?subject=Inquiry%20for%20%5Bhome%5D%20-%20%5Bhost%20name%5D"
                                className="rounded-lg bg-green px-11 py-3 font-bold tracking-wide text-white hover:bg-darkGreen"
                            >
                                Book a place
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ListingsHeader;
