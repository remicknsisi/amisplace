"use client";

import React, { useState } from "react";

import { useRouter } from "next/navigation";

import { poppins } from "../../helpers/loadFont";
import { isValidEmail } from "../../helpers/validationFunctions";
import { errorMessages } from "../../helpers/errorMessages";

const LoginBody = () => {
    const router = useRouter();
    const [emailInput, setEmailInput] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (emailInput === "") {
            e.preventDefault();
            setErrorMessage(errorMessages.fieldRequired("Email address"));
        } else if (!isValidEmail(emailInput)) {
            e.preventDefault();
            setErrorMessage(errorMessages.validAddress("email address"));
        } else {
            // TODO, I don't think this works. I think it just redirects to the same page with a GET request
            // <form action="/auth/login" method="post" onSubmit={handleFormSubmit}>
            // And chage the button to type="submit"
            // Then you can still do something similar with
            // const handleFormSubmit = (event) => {
            //      const formData = new FormData(e.target);
            //      if ... event.preventDefault();
            // Letting it go through should send the post request
            router.push("/");
        }
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
                                Log in
                            </h1>
                        </div>
                        <form className="mb-4 mt-12 grid grid-cols-[1fr,1fr] grid-rows-[1fr] gap-x-6 gap-y-0">
                            <div className="col-span-2 row-span-1 block">
                                <label
                                    htmlFor="EMAIL"
                                    className="mb-4 block font-bold opacity-70"
                                >
                                    Email
                                </label>
                                <input
                                    className={`${inputClasses}`}
                                    placeholder="Enter email"
                                    id="EMAIL"
                                    maxLength={256}
                                    required
                                    onBlur={(e) =>
                                        setEmailInput(e.target.value)
                                    }
                                />
                            </div>
                            <p className="-mt-4 mb-6 text-sm text-red-500">
                                {errorMessage}
                            </p>
                            <div className="relative col-span-2 row-span-1 block">
                                <label
                                    htmlFor="PASSWORD"
                                    className="mb-4 block font-bold opacity-70"
                                >
                                    Password
                                </label>
                                <input
                                    className={`${inputClasses} !mb-4 pr-10`}
                                    placeholder="Enter password"
                                    id="PASSWORD"
                                    maxLength={256}
                                    required
                                />
                                <a
                                    href="/reset/request"
                                    className="mb-8 mt-2 text-sm text-green underline"
                                >
                                    Forgot your password?
                                </a>
                            </div>
                            <div className="col-span-2 row-span-1 mt-12 flex flex-col transition duration-200 ease-in-out hover:scale-105">
                                <button
                                    className="cursor-pointer rounded-md bg-green px-[2.625rem] py-3 text-center text-xl font-bold text-white"
                                    onClick={handleButtonClick}
                                >
                                    Log in
                                </button>
                            </div>
                            <p className="mt-4 whitespace-nowrap font-light tracking-wide">
                                Not a member yet?{" "}
                                <a
                                    className="text-green underline"
                                    href="/join"
                                >
                                    Join Amisplace
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginBody;
