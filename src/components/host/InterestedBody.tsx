"use client";

import React from "react";

import { useRouter } from "next/navigation";

import { poppins } from "../../helpers/loadFont";

const InterestedBody = () => {
    const router = useRouter();
    return (
        <div className="mt-[4.5rem] flex justify-center md:mt-0">
            <div className="flex max-w-[41rem] justify-start">
                <div className="mt-[15%] px-5 md:px-8">
                    <div>
                        <button
                            onClick={() => router.push("/host/gettingStarted")}
                            className="flex items-center gap-2 text-[#2F3030]/[.8]"
                        >
                            <img
                                src="/assets/logos/chevron_left.svg"
                                alt="Logo for Amisplace"
                            />
                            Back
                        </button>
                    </div>
                    <div className="mx-auto w-full max-w-[80rem] pb-[4.5rem]">
                        <div className="flex flex-col justify-center pt-4 text-left md:pt-[7rem]">
                            <h1
                                className={`${poppins.className} text-[1.75rem] font-bold md:text-[2.5rem]`}
                            >
                                Interested in hosting?
                            </h1>
                            <p className="mb-4 mt-4 text-xl font-light opacity-70">
                                We&apos;re currently prioritizing hosts -- if
                                you&apos;re interested, let us know along with
                                some key information about your home.
                            </p>
                        </div>

                        <div className="col-span-2 row-span-1 mt-12 flex flex-col gap-4">
                            <div className="transition duration-200 ease-in-out hover:scale-105">
                                <button
                                    className="w-full cursor-pointer rounded-md bg-green px-[2.625rem] py-3 text-center text-xl font-bold text-white"
                                    onClick={() => router.push("/")}
                                    type="button"
                                >
                                    I&apos;m interested in hosting
                                </button>
                            </div>
                            <div className="transition duration-200 ease-in-out hover:scale-105">
                                <button
                                    className="w-full cursor-pointer rounded-md border border-green bg-white px-[2.625rem] py-3 text-center text-xl font-bold text-green"
                                    onClick={() => router.push("/")}
                                    type="button"
                                >
                                    Maybe later
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InterestedBody;
