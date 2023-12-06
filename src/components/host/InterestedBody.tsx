"use client";

import { useRouter } from "next/navigation";
import React from "react";

import { poppins } from "../../helpers/loadFont";

const InterestedBody = () => {
    const router = useRouter();
    return (
        <>
            <div className="flex flex-col justify-center text-left">
                <h1
                    className={`${poppins.className} text-[1.75rem] font-bold md:text-[2.5rem]`}
                >
                    Application sent
                </h1>
                <h4 className="mt-2 text-[1.2rem] font-bold">
                    Thanks for your interest in Amisplace!
                </h4>
                <p className="my-4 text-xl font-light opacity-70">
                    If you&apos;d like to strengthen your application,
                    we&apos;re currently prioritizing hosts -- if you&apos;re
                    interested, let us know along with some key information
                    about your home.
                </p>
            </div>
            <div className="col-span-2 row-span-1 mt-12 flex flex-col gap-4">
                <div className="transition duration-200 ease-in-out hover:scale-105">
                    <button
                        className="w-full cursor-pointer rounded-md bg-green px-[2.625rem] py-3 text-center text-xl font-bold text-white"
                        onClick={() => router.push("/host/details")}
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
        </>
    );
};

export default InterestedBody;
