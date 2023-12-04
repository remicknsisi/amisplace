"use client";

import React, { FormEvent, useState } from "react";

import { useRouter } from "next/navigation";

import { poppins } from "../../helpers/loadFont";

const GettingStartedBody = ({ userId }: { userId: string }) => {
    const router = useRouter();

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const response = await fetch(`/api/profile/${userId}`, {
            method: "PATCH",
            body: formData,
        });

        const data = await response.json();
        if (data?.success) {
            router.push("/host/interested");
        } else {
            // TODO: deal with error
        }
    }

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
                        <form
                            className="mb-4 mt-6 grid grid-cols-[1fr,1fr] grid-rows-[1fr] gap-x-6 gap-y-0"
                            onSubmit={onSubmit}
                        >
                            <div className="relative col-span-2 row-span-1 block">
                                <label className="mb-4 block font-bold opacity-70">
                                    Do you know anyone from Amisplace? If so,
                                    who?
                                    <input
                                        className="mb-4 h-[38px] min-h-[3rem] w-full rounded-lg border border-solid border-[#C5D1CF] p-3 text-[14px] focus:border-green focus:outline-none focus:ring-0 focus-visible:border-green"
                                        name="application_referral_first_name"
                                        maxLength={256}
                                        required
                                    />
                                </label>
                            </div>
                            <div className="relative col-span-2 row-span-1 block">
                                <label className="mb-4 block font-bold opacity-70">
                                    Otherwise, how did you hear about us?
                                    <span className="ml-1 font-light">
                                        (Optional)
                                    </span>
                                    <input
                                        className="mb-4 h-[38px] min-h-[3rem] w-full rounded-lg border border-solid border-[#C5D1CF] p-3 text-[14px] focus:border-green focus:outline-none focus:ring-0 focus-visible:border-green"
                                        name="application_heard_from"
                                        maxLength={256}
                                    />
                                </label>
                            </div>
                            <div className="col-span-2 row-span-1 mt-12 flex flex-col transition duration-200 ease-in-out hover:scale-105">
                                <button
                                    className="cursor-pointer rounded-md bg-green px-[2.625rem] py-3 text-center text-xl font-bold text-white"
                                    type="submit"
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
