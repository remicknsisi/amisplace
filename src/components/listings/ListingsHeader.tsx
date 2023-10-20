import React from "react";

import { poppins } from "../../helpers/loadFont";

const ListingsHeader = () => {
    return (
        <>
            <div className="bg-lightGreen-50">
                <div className="px-10">
                    <div className="flex flex-col items-center justify-center text-center max-w-[80rem] mx-auto pb-8 pt-24 w-full">
                        <h1
                            className={`text-[2.25rem] lg:text-[2.5rem] mb-4 ${poppins.className}`}
                        >
                            Available homes
                        </h1>
                        <div className="max-w-[40rem]">
                            <p className="text-lg lg:text-xl font-light">
                                To book a home, email{" "}
                                <a
                                    href="mailto:concierge@amisplace.com?subject=Book%20Home"
                                    className="text-green"
                                >
                                    concierge@amisplace.com
                                </a>{" "}
                                and our team will assist you.
                            </p>
                            <p className="text-lg lg:text-xl font-light mt-6">
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
                        <div className="hover:scale-105 transition ease-in-out duration-200 mt-12 mb-6">
                            <a
                                href="mailto:concierge@amisplace.com?subject=Inquiry%20for%20%5Bhome%5D%20-%20%5Bhost%20name%5D"
                                className="bg-green text-white rounded-lg py-3 px-11 tracking-wide font-bold hover:bg-darkGreen"
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
