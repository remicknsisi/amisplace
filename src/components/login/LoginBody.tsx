"use client";

import React, { FormEvent, useState } from "react";

import { poppins } from "../../helpers/loadFont";
import { useRouter } from "next/navigation";

const LoginBody = () => {
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState("");

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const response = await fetch("/auth/login", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        if (data?.success) {
            // TODO: Do we need a new page? Should we just update this one? Not sure
            console.log(data);
            router.push("/account");
        } else {
            setErrorMessage("Incorrect password");
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
                                Log in
                            </h1>
                        </div>
                        <form
                            onSubmit={onSubmit}
                            className="mb-4 mt-12 grid grid-cols-[1fr,1fr] grid-rows-[1fr] gap-x-6 gap-y-0"
                        >
                            <div className="col-span-2 row-span-1 block">
                                <label className="mb-4 block font-bold opacity-70">
                                    Email
                                    <input
                                        className={`${inputClasses}`}
                                        placeholder="Enter email"
                                        name="email"
                                        maxLength={256}
                                        type="email"
                                        required
                                    />
                                </label>
                            </div>
                            <div className="relative col-span-2 row-span-1 block">
                                <label className="mb-4 block font-bold opacity-70">
                                    Password
                                    <input
                                        className={`${inputClasses} !mb-4 pr-10`}
                                        placeholder="Enter password"
                                        name="password"
                                        type="password"
                                        maxLength={256}
                                        minLength={8}
                                        required
                                    />
                                </label>
                                <p className="-mt-4 mb-6 text-sm text-red-500">
                                    {errorMessage}
                                </p>
                                <a
                                    href="/reset/request"
                                    className="mb-8 mt-2 text-sm text-green underline"
                                >
                                    Forgot your password?
                                </a>
                            </div>
                            <div className="col-span-2 row-span-1 mt-12 flex flex-col transition duration-200 ease-in-out hover:scale-105">
                                <button
                                    type="submit"
                                    className="cursor-pointer rounded-md bg-green px-[2.625rem] py-3 text-center text-xl font-bold text-white"
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
