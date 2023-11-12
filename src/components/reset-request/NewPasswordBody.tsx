"use client";

import React, { useState } from "react";

import { useRouter } from "next/navigation";

import { poppins } from "../../helpers/loadFont";

const NewPasswordBody = () => {
    const router = useRouter();
    const [passwordInput, setPasswordInput] = useState("");
    const [buttonClicked, setButtonClicked] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    const handleButtonClick = () => {
        setButtonClicked(true);
        if (passwordInput.length < 8) {
            return;
        } else {
            router.push("/reset/success");
        }
    };

    const toggleShowPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setShowPassword(!showPassword);
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
                        <form className="mb-4 mt-6 grid grid-cols-[1fr,1fr] grid-rows-[1fr] gap-x-6 gap-y-0">
                            <div className="relative col-span-2 row-span-1 block">
                                <label
                                    htmlFor="PASSWORD"
                                    className="mb-4 block font-bold opacity-70"
                                >
                                    Password
                                </label>
                                <input
                                    className="mb-4 h-[38px] min-h-[3rem] w-full rounded-lg border border-solid border-[#C5D1CF] p-3 text-[14px] focus:border-green focus:outline-none focus:ring-0 focus-visible:border-green"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter password"
                                    id="PASSWORD"
                                    maxLength={256}
                                    required
                                    onBlur={(e) =>
                                        setPasswordInput(e.target.value)
                                    }
                                />
                                <div className="absolute bottom-4 right-0 top-0 flex items-center pr-3">
                                    <button onClick={toggleShowPassword}>
                                        <img
                                            src={`/assets/logos/${
                                                showPassword
                                                    ? "visibility_off"
                                                    : "visibility_on"
                                            }.svg`}
                                            className="h-5 w-5 cursor-pointer text-gray-400"
                                            alt={`Eye ${
                                                showPassword ? "closed" : "open"
                                            } icon`}
                                        />
                                    </button>
                                </div>
                                <p
                                    className={`mb-8 text-sm ${
                                        buttonClicked &&
                                        passwordInput.length < 8
                                            ? "text-red-500"
                                            : "text-gray-500"
                                    }`}
                                >
                                    Use at least 8 characters in your password.
                                </p>
                            </div>
                            <div className="col-span-2 row-span-1 mt-12 flex flex-col transition duration-200 ease-in-out hover:scale-105">
                                <button
                                    className="cursor-pointer rounded-md bg-green px-[2.625rem] py-3 text-center text-xl font-bold text-white"
                                    onClick={handleButtonClick}
                                    type="button"
                                >
                                    Reset password
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewPasswordBody;
