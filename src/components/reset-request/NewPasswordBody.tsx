"use client";

import React, { FormEvent, useState } from "react";

import { poppins } from "../../helpers/loadFont";
import { useRouter } from "next/navigation";

const NewPasswordBody = () => {
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const response = await fetch("/auth/reset/new", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        if (data?.success) {
            // TODO: Do we need a new page? Should we just update this one? Not sure
            console.log(data);
            router.push("/reset/success");
        } else {
            setErrorMessage("An error happened, please try again");
        }
    }

    const toggleShowPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    };

    return (
        <div className="mx-auto w-full pb-[4.5rem]">
            <div className="flex flex-col justify-center text-left">
                <h1
                    className={`${poppins.className} text-[2rem] font-bold md:text-[2.5rem]`}
                >
                    Reset password
                </h1>
                <p className="mb-4 mt-4 text-xl font-light opacity-70">
                    Enter a new password below.
                </p>
            </div>
            <form
                onSubmit={onSubmit}
                className="mb-4 mt-6 grid grid-cols-[1fr,1fr] grid-rows-[1fr] gap-x-6 gap-y-0"
            >
                <div className="relative col-span-2 row-span-1 block">
                    <label className="mb-4 block font-bold opacity-70">
                        Password
                        <input
                            className="mb-4 h-[38px] min-h-[3rem] w-full rounded-lg border border-solid border-[#C5D1CF] p-3 text-[14px] focus:border-green focus:outline-none focus:ring-0 focus-visible:border-green"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter password"
                            name="password"
                            maxLength={256}
                            minLength={8}
                            required
                        />
                    </label>
                    <div className="absolute bottom-0 right-0 top-0 flex items-center pr-3">
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
                    <p className="-mt-4 mb-6 text-sm text-red-500">
                        {errorMessage}
                    </p>
                </div>
                <div className="col-span-2 row-span-1 mt-12 flex flex-col transition duration-200 ease-in-out hover:scale-105">
                    <button
                        className="cursor-pointer rounded-md bg-green px-[2.625rem] py-3 text-center text-xl font-bold text-white"
                        type="submit"
                    >
                        Reset password
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewPasswordBody;
