"use client";

import React, { useState } from "react";

import { poppins } from "../../helpers/loadFont";

const JoinBody = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [hasAgreed, setHasAgreed] = useState(false);

    const toggleShowPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    };

    const inputClasses =
        "mb-6 h-[38px] min-h-[3rem] w-full rounded-lg border border-solid border-[#C5D1CF] p-3 text-[14px] focus:border-green focus:outline-none focus:ring-0 focus-visible:border-green";
    return (
        <div className="mt-[4.5rem] flex justify-center md:mt-0">
            <div className="flex max-w-[41rem] justify-start">
                <div className="px-5 md:px-8">
                    <div className="mx-auto w-full max-w-[80rem] pb-[4.5rem]">
                        <div className="flex flex-col justify-center pt-4 text-left md:pt-[7rem]">
                            <h1
                                className={`${poppins.className} text-[2rem] font-bold md:text-[2.5rem]`}
                            >
                                Apply to join
                            </h1>
                            <p className="mb-4 mt-4 text-xl font-light opacity-70 md:mb-12">
                                We&apos;d love to have you be a part of
                                Amisplace -- but first, you&apos;ll need to
                                create an account.
                            </p>
                        </div>
                        <form className="grid grid-cols-[1fr,1fr] grid-rows-[1fr] gap-x-6 gap-y-0">
                            <div className="col-span-2 row-span-1 block md:col-span-1">
                                <label
                                    htmlFor="FNAME"
                                    className="mb-4 block font-bold opacity-70"
                                >
                                    First name
                                </label>
                                <input
                                    className={inputClasses}
                                    placeholder="Enter first name"
                                    id="FNAME"
                                    maxLength={256}
                                    required
                                />
                            </div>
                            <div className="col-span-2 row-span-1 block md:col-span-1">
                                <label
                                    htmlFor="LNAME"
                                    className="mb-4 block font-bold opacity-70"
                                >
                                    Last name
                                </label>
                                <input
                                    className={inputClasses}
                                    placeholder="Enter last name"
                                    id="LNAME"
                                    maxLength={256}
                                    required
                                />
                            </div>
                            <div className="col-span-2 row-span-1 block">
                                <label
                                    htmlFor="EMAIL"
                                    className="mb-4 block font-bold opacity-70"
                                >
                                    Email
                                </label>
                                <input
                                    className={inputClasses}
                                    placeholder="Enter email"
                                    id="EMAIL"
                                    maxLength={256}
                                    required
                                />
                            </div>
                            <div className="relative col-span-2 row-span-1 block">
                                <label
                                    htmlFor="PASSWORD"
                                    className="mb-4 block font-bold opacity-70"
                                >
                                    Password
                                </label>
                                <input
                                    className={`${inputClasses} mb-0 pr-10`}
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter password"
                                    id="PASSWORD"
                                    maxLength={256}
                                    required
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
                                <p className="mb-8 mt-2 text-sm text-gray-500">
                                    Use at least 8 characters in your password
                                </p>
                            </div>
                            <div className="col-span-2 row-span-1 font-light">
                                By joining you agree to Amisplace&apos;s{" "}
                                <a
                                    href="https://amisplace.notion.site/Terms-of-Service-5fd47ee6d6a14396b70d7c9daa355bfd?pvs=4"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <u>Terms</u>
                                </a>{" "}
                                and{" "}
                                <a
                                    href="https://amisplace.notion.site/Privacy-Policy-cdf7a52254574cc2a330ef80a4a17c22"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <u>Privacy Policy</u>
                                </a>
                                .
                            </div>
                            <div className="col-span-2 row-span-1 my-4">
                                <input
                                    id="terms"
                                    type="checkbox"
                                    checked={hasAgreed}
                                    onChange={(e) =>
                                        setHasAgreed(e.target.checked)
                                    }
                                    className="mt-1 h-4 w-4 rounded border-gray-300 align-top text-green focus:ring-green"
                                />
                                <label htmlFor="terms" className="ml-2 font-light">
                                    I have read and agree to the Terms of
                                    Service and Privacy Policy.
                                </label>
                            </div>
                            <div
                                className={`col-span-2 row-span-1 mt-4 flex flex-col ${
                                    hasAgreed
                                        ? "transition duration-200 ease-in-out hover:scale-105"
                                        : ""
                                }`}
                            >
                                <button
                                    className={`cursor-pointer rounded-md ${
                                        !hasAgreed
                                            ? "bg-green/[.15]"
                                            : "bg-green"
                                    } px-[2.625rem] py-3 text-center text-xl font-bold text-white`}
                                    disabled={!hasAgreed}
                                >
                                    Submit
                                </button>
                            </div>
                            <p className="mt-4 font-light tracking-wide">
                                Already a member?{" "}
                                <a
                                    className="text-green underline"
                                    href="/login"
                                >
                                    Log in
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinBody;
