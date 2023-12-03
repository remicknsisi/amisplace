"use client";

import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import { poppins } from "../../helpers/loadFont";

const JoinBody = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const toggleShowPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    };

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const response = await fetch("/auth/sign-up", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        if (data?.success) {
            sessionStorage.setItem("email", data?.email);
            router.push("/confirm");
        } else if (data?.alreadyInUse) {
            // TODO: we should redirect to an error specific page
            setErrorMessage("Email already in use, try to log in instead?");
        } else {
            setErrorMessage("An error occured, please try again");
        }
    }

    const inputClasses =
        "mb-2 h-[38px] min-h-[3rem] w-full rounded-lg border border-solid border-[#C5D1CF] p-3 text-[14px] focus:border-green focus:outline-none focus:ring-0 focus-visible:border-green";
    return (
        <>
            <div className="mx-auto w-full max-w-[80rem] pb-[4.5rem]">
                <div className="flex flex-col justify-center text-left">
                    <h1
                        className={`${poppins.className} text-[2rem] font-bold md:text-[2.5rem]`}
                    >
                        Apply to join
                    </h1>
                    <p className="mb-4 mt-4 text-xl font-light opacity-70 md:mb-12">
                        We&apos;d love to have you be a part of Amisplace -- but
                        first, you&apos;ll need to create an account.
                    </p>
                </div>
                <form
                    onSubmit={onSubmit}
                    className="grid grid-cols-[1fr,1fr] grid-rows-[1fr] gap-x-6 gap-y-0"
                >
                    <div className="col-span-2 row-span-1 block md:col-span-1">
                        <label className="mb-4 block font-bold opacity-70">
                            First name
                            <input
                                className={inputClasses}
                                placeholder="Enter first name"
                                name="firstName"
                                maxLength={256}
                                required
                            />
                        </label>
                    </div>
                    <div className="col-span-2 row-span-1 block md:col-span-1">
                        <label className="mb-4 block font-bold opacity-70">
                            Last name
                            <input
                                className={inputClasses}
                                placeholder="Enter last name"
                                name="lastName"
                                maxLength={256}
                                required
                            />
                        </label>
                    </div>
                    <div className="col-span-2 row-span-1 block">
                        <label className="mb-4 block font-bold opacity-70">
                            Email
                            <input
                                className={inputClasses}
                                placeholder="Enter email"
                                name="email"
                                type="email"
                                maxLength={256}
                                required
                            />
                        </label>
                    </div>
                    <div className="relative col-span-2 row-span-1 block">
                        <label className="mb-4 block font-bold opacity-70">
                            Password
                            <input
                                className={`${inputClasses} !mb-4 pr-10`}
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter password"
                                name="password"
                                maxLength={256}
                                minLength={8}
                                required
                            />
                        </label>
                        <div className="absolute bottom-6 right-0 top-0 flex items-center pr-3">
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
                        <p className="-mt-4 mb-8 text-sm text-gray-500">
                            Use at least 8 characters in your password.
                        </p>
                        <p className="-mt-4 mb-6 text-sm text-red-500">
                            {errorMessage}
                        </p>
                    </div>
                    <div className="col-span-2 row-span-1 font-light">
                        By continuing, you agree to Amisplace&apos;s{" "}
                        <a
                            href="https://amisplace.notion.site/Terms-of-Service-5fd47ee6d6a14396b70d7c9daa355bfd?pvs=4"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <u>Terms</u>
                        </a>{" "}
                        and acknowledge the&nbsp;
                        <a
                            href="https://amisplace.notion.site/Privacy-Policy-cdf7a52254574cc2a330ef80a4a17c22"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <u>Privacy Policy.</u>
                        </a>
                    </div>
                    <div className="col-span-2 row-span-1 mt-4 flex flex-col transition duration-200 ease-in-out hover:scale-105">
                        <button className="cursor-pointer rounded-md bg-green px-[2.625rem] py-3 text-center text-xl font-bold text-white">
                            Submit
                        </button>
                    </div>
                    <p className="mt-4 font-light tracking-wide">
                        Already a member?{" "}
                        <a className="text-green underline" href="/login">
                            Log in
                        </a>
                    </p>
                </form>
            </div>
        </>
    );
};

export default JoinBody;
