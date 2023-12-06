"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";

import { poppins } from "../../helpers/loadFont";

const ConfirmBody = () => {
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        // Retrieve email from sessionStorage
        const email = sessionStorage.getItem("email");
        if (email) {
            setEmail(email);
            sessionStorage.removeItem("email");
        }
    }, []);

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        // For now this page is only for signup confirmation
        formData.set("type", "signup");
        const response = await fetch("/auth/confirm", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        if (data?.success) {
            // TODO: Move to next step in sign up process
            router.push("/account");
        } else {
            setErrorMessage("Incorrect code");
        }
    }

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
                                Verify your email
                            </h1>
                        </div>
                        <p className="mb-4 mt-4 text-xl font-light opacity-70 md:mb-12">
                            {/* I don't want to use GET paramters here since it would allow user to inject any value */}
                            Please enter the 6-character code we sent to{" "}
                            {email ? `${email}.` : "your email."}
                        </p>
                        <form
                            onSubmit={onSubmit}
                            className="mb-4 mt-12 grid grid-cols-[1fr,1fr] grid-rows-[1fr] gap-x-6 gap-y-0"
                        >
                            <div className="col-span-2 row-span-1 block">
                                <label className="mb-4 block font-bold opacity-70">
                                    Enter code
                                    <input
                                        className={`${inputClasses} [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`}
                                        name="token_hash"
                                        maxLength={6}
                                        minLength={6}
                                        type="number"
                                        required
                                    />
                                </label>
                            </div>
                            <p className="-mt-4 mb-6 text-sm text-red-500">
                                {errorMessage}
                            </p>
                            <div className="col-span-2 row-span-1 mt-12 flex flex-col transition duration-200 ease-in-out hover:scale-105">
                                <button
                                    type="submit"
                                    className="cursor-pointer rounded-md bg-green px-[2.625rem] py-3 text-center text-xl font-bold text-white"
                                >
                                    Verify
                                </button>
                            </div>
                            <p className="mt-4 whitespace-nowrap font-light tracking-wide">
                                Haven’t received an email? Check your spam
                                folder or{" "}
                                <a
                                    className="text-green underline"
                                    href="/join"
                                >
                                    apply with a different email address
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmBody;
