"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

import { poppins } from "../../helpers/loadFont";
import { isValidEmail } from "../../helpers/validationFunctions";

const ResetRequestBody = () => {
    const router = useRouter();
    const [emailInput, setEmailInput] = useState("");
    const [buttonClicked, setButtonClicked] = useState(false);

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setButtonClicked(true);
        if (!isValidEmail(emailInput)) {
            return;
        }
        const formData = new FormData(event.currentTarget);
        const response = await fetch("/auth/reset/request", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        if (data?.success) {
            // TODO: Do we need a new page? Should we just update this one? Not sure
            router.push("/reset/received");
        } else {
            // TODO: Probably need to display some error message
        }
    }

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
                        Enter your email and we&apos;ll send you a link to reset
                        your password.
                    </p>
                </div>
                <form
                    onSubmit={onSubmit}
                    className="mb-4 mt-6 grid grid-rows-[1fr] gap-x-6 gap-y-0"
                >
                    <div className="col-span-2 row-span-1 block">
                        <label className="mb-4 block font-bold opacity-70">
                            Email
                            <input
                                className={
                                    "mb-2 h-[38px] min-h-[3rem] w-full rounded-lg border border-solid border-[#C5D1CF] p-3 text-[14px] focus:border-green focus:outline-none focus:ring-0 focus-visible:border-green"
                                }
                                placeholder="Enter email"
                                name="email"
                                maxLength={256}
                                required
                                onBlur={(e) => setEmailInput(e.target.value)}
                            />
                        </label>
                    </div>
                    {!isValidEmail(emailInput) && buttonClicked && (
                        <p className="text-sm text-red-500">
                            Please input a valid email address.
                        </p>
                    )}
                    <div className="col-span-2 row-span-1 mt-12 flex flex-col transition duration-200 ease-in-out hover:scale-105">
                        <button
                            className="cursor-pointer rounded-md bg-green px-[2.625rem] py-3 text-center text-xl font-bold text-white"
                            type="submit"
                        >
                            Request reset
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ResetRequestBody;
