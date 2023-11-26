"use client";

import React from "react";

import { useRouter } from "next/navigation";

import { poppins } from "../../helpers/loadFont";
import BackButton from "../common/BackButton";

const AboutHomeBody = () => {
    const router = useRouter();
    return (
        <div className="mt-[4.5rem] flex justify-center md:mt-0">
            <div className="flex w-full max-w-[41rem] justify-start">
                <div className="mt-4 w-full px-5 sm:mt-28 md:px-8">
                    <div>
                        <BackButton
                            onClick={() => router.push("/host/details")}
                        />
                    </div>
                    <div className="mx-auto w-full max-w-[80rem] pb-[4.5rem]">
                        <div className="flex flex-col justify-center pt-4 text-left">
                            <h1
                                className={`${poppins.className} text-[1.75rem] font-bold md:text-[2.5rem] mb-8`}
                            >
                                Last step
                            </h1>
                        </div>
                        <form>
                            <div>
                                <label
                                    className="mb-4 block font-bold opacity-70"
                                    htmlFor="more-info"
                                >
                                    Anything else you&apos;d like us to know?&nbsp;<span className="font-light">(Optional)</span>
                                    <textarea
                                        className="mb-4 mt-2 min-h-[10rem] w-full rounded-lg border border-solid border-[#C5D1CF] p-3 text-[14px] focus:border-green focus:outline-none focus:ring-0 focus-visible:border-green resize-none font-light"
                                        name="more-info"
                                        maxLength={350}
                                    />
                                </label>
                            </div>
                        </form>
                        <div className="mt-4 flex flex-col transition duration-200 ease-in-out hover:scale-105">
                            <button className="cursor-pointer rounded-md bg-green px-[2.625rem] py-3 text-center text-xl font-bold text-white">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHomeBody;
