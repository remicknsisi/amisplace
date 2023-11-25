"use client";

import React, { useState } from "react";

import { useRouter } from "next/navigation";

import { poppins } from "../../helpers/loadFont";
import { errorMessages } from "../../helpers/errorMessages";

const GettingStartedBody = () => {
    const router = useRouter();
    const [referralInput, setReferralInput] = useState("");
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleButtonClick = () => {
        setButtonClicked(true);
        if (referralInput.length === 0) {
            return;
        } else {
            router.push("/host/interested");
        }
    };

    return (
        <div className="mt-[4.5rem] flex justify-center md:mt-0">
            <div className="flex max-w-[41rem] justify-start">
                <div className="px-5 md:px-8">
                    <div className="mx-auto w-full max-w-[80rem] pb-[4.5rem]">
                        <div className="flex flex-col justify-center pt-4 text-left md:pt-[7rem]">
                            <h1
                                className={`${poppins.className} text-[2rem] font-bold md:text-[2.5rem]`}
                            >
                                Getting started
                            </h1>
                            <p className="mb-4 mt-4 text-xl font-light opacity-70">
                                Our community is built on trust, so it&apos;s
                                important we get to know every one of you
                                interested in joining Amisplace.
                            </p>
                        </div>
                        <form className="mb-4 mt-6 grid grid-cols-[1fr,1fr] grid-rows-[1fr] gap-x-6 gap-y-0">
                            <div className="relative col-span-2 row-span-1 block">
                                <label
                                    htmlFor="REFERRAL"
                                    className="mb-4 block font-bold opacity-70"
                                >
                                    Do you know anyone from Amisplace? If so,
                                    who?
                                </label>
                                <input
                                    className="mb-4 h-[38px] min-h-[3rem] w-full rounded-lg border border-solid border-[#C5D1CF] p-3 text-[14px] focus:border-green focus:outline-none focus:ring-0 focus-visible:border-green"
                                    id="REFERRAL"
                                    maxLength={256}
                                    required
                                    onBlur={(e) =>
                                        setReferralInput(e.target.value)
                                    }
                                />
                                {referralInput.length === 0 &&
                                    buttonClicked && (
                                    <p className="-mt-2 mb-4 text-sm text-red-500">
                                        {errorMessages.fieldRequired(
                                            "This field"
                                        )}
                                    </p>
                                )}
                            </div>
                            <div className="relative col-span-2 row-span-1 block">
                                <label
                                    htmlFor="HEAR"
                                    className="mb-4 block font-bold opacity-70"
                                >
                                    Otherwise, how did you hear about us?
                                    <span className="ml-1 font-light">
                                        (Optional)
                                    </span>
                                </label>
                                <input
                                    className="mb-4 h-[38px] min-h-[3rem] w-full rounded-lg border border-solid border-[#C5D1CF] p-3 text-[14px] focus:border-green focus:outline-none focus:ring-0 focus-visible:border-green"
                                    id="HEAR"
                                    maxLength={256}
                                />
                            </div>
                            <div className="col-span-2 row-span-1 mt-12 flex flex-col transition duration-200 ease-in-out hover:scale-105">
                                <button
                                    className="cursor-pointer rounded-md bg-green px-[2.625rem] py-3 text-center text-xl font-bold text-white"
                                    onClick={handleButtonClick}
                                    type="button"
                                >
                                    Next
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GettingStartedBody;
