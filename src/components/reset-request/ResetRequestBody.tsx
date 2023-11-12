"use client";

import React, { useState } from "react";

import { useRouter } from "next/navigation";

import { poppins } from "../../helpers/loadFont";
import { isValidEmail } from "../../helpers/validationFunctions";

const ResetRequestBody = () => {
    const router = useRouter();
    const [emailInput, setEmailInput] = useState("");
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleButtonClick = () => {
        setButtonClicked(true);
        if (!isValidEmail(emailInput)) {
            return;
        } else {
            router.push("/reset/received");
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
                                Reset password
                            </h1>
                            <p className="mb-4 mt-4 text-xl font-light opacity-70">
                                Enter your email and we&apos;ll send you a link
                                to reset your password.
                            </p>
                        </div>
                        <form className="mb-4 mt-6 grid grid-rows-[1fr] gap-x-6 gap-y-0">
                            <div className="col-span-2 row-span-1 block">
                                <label
                                    htmlFor="EMAIL"
                                    className="mb-4 block font-bold opacity-70"
                                >
                                    Email
                                </label>
                                <input
                                    className={
                                        "mb-2 h-[38px] min-h-[3rem] w-full rounded-lg border border-solid border-[#C5D1CF] p-3 text-[14px] focus:border-green focus:outline-none focus:ring-0 focus-visible:border-green"
                                    }
                                    placeholder="Enter email"
                                    id="EMAIL"
                                    maxLength={256}
                                    required
                                    onBlur={(e) =>
                                        setEmailInput(e.target.value)
                                    }
                                />
                            </div>
                            {!isValidEmail(emailInput) && buttonClicked && (
                                <p className="text-sm text-red-500">
                                    Please input a valid email address.
                                </p>
                            )}
                            <div className="col-span-2 row-span-1 mt-12 flex flex-col transition duration-200 ease-in-out hover:scale-105">
                                <button
                                    className="cursor-pointer rounded-md bg-green px-[2.625rem] py-3 text-center text-xl font-bold text-white"
                                    onClick={handleButtonClick}
                                    type="button"
                                >
                                    Request reset
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetRequestBody;
