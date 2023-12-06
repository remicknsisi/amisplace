"use client";

import { useRouter } from "next/navigation";
import React from "react";

import { poppins } from "../../helpers/loadFont";

const NewPasswordResetBody = () => {
    const router = useRouter();

    return (
        <>
            <div className="mx-auto w-full max-w-[80rem] pb-[4.5rem]">
                <div className="flex flex-col justify-center text-left">
                    <h1
                        className={`${poppins.className} text-[2rem] font-bold md:text-[2.5rem]`}
                    >
                        Reset password
                    </h1>
                    <p className="my-4 text-xl font-light opacity-70">
                        Your password has been reset.
                    </p>
                </div>
                <div className="col-span-2 row-span-1 mt-12 flex flex-col transition duration-200 ease-in-out hover:scale-105">
                    <button
                        className="cursor-pointer rounded-md bg-green px-[2.625rem] py-3 text-center text-xl font-bold text-white"
                        onClick={() => router.push("/login")}
                    >
                        Back to log in
                    </button>
                </div>
            </div>
        </>
    );
};

export default NewPasswordResetBody;
