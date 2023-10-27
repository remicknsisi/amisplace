import React from "react";

import { poppins } from "../../helpers/loadFont";

const JoinBody = () => {
    return (
        <div className="grid gap-x-10 gap-y-[16px] md:grid-cols-[1fr,1fr]">
            <div className="top-0 flex h-[80vw] min-h-[18rem] flex-col md:sticky md:h-[100vh]">
                <div className="h-[4.5rem] flex-none" />
                <div className="flex-1 overflow-hidden md:rounded-br-3xl md:rounded-tr-3xl">
                    <img
                        src="/assets/join-photo.jpeg"
                        alt="Woman sitting in front of a house."
                        className="h-full w-full object-cover object-bottom"
                    />
                </div>
            </div>
            <div className="flex max-w-[41rem] justify-start">
                <div className="px-5 md:px-8">
                    <div className="mx-auto w-full max-w-[80rem] pb-[4.5rem]">
                        <div className="flex flex-col justify-center pt-4 text-left md:pt-[7rem]">
                            <h1
                                className={`${poppins.className} text-[2rem] font-bold md:text-[2.5rem]`}
                            >
                                Join Amisplace
                            </h1>
                            <p className="mb-4 mt-4 text-xl font-light opacity-70 md:mb-12">
                                Send us an application -- we&apos;d love to have
                                you be a part of Amisplace!
                            </p>
                        </div>
                        <form className="grid grid-cols-[1fr,1fr] grid-rows-[1fr] gap-x-6 gap-y-0">
                            <div className="col-span-2 row-span-1 mb-8">
                                <label
                                    htmlFor="email"
                                    className="mb-2 font-semibold opacity-60"
                                >
                                    Join as:
                                </label>
                                <div className="mt-3 flex">
                                    <label
                                        className="mr-12 flex flex-row items-center"
                                        htmlFor="host-button"
                                    >
                                        <div className="mr-2 h-3.5 w-3.5 rounded-full border border-solid border-[#C5D1CF]" />
                                        <input className="absolute -z-10 opacity-0" />
                                        <span className="inline-block cursor-pointer">
                                            Both host & guest
                                        </span>
                                    </label>
                                    <label
                                        className="flex flex-row items-center"
                                        htmlFor="guest-button"
                                    >
                                        <div className="mr-2 h-3.5 w-3.5 rounded-full border border-solid border-[#C5D1CF]" />
                                        <input className="absolute -z-10 opacity-0" />
                                        <span className="inline-block cursor-pointer">
                                            Guest
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div className="col-span-2 row-span-1 block md:col-span-1">
                                <label
                                    htmlFor="FNAME"
                                    className="mb-4 block font-bold opacity-70"
                                >
                                    First name
                                </label>
                                <input
                                    className="mb-6 h-[38px] min-h-[3rem] w-full rounded-lg border border-solid border-[#C5D1CF] p-3 text-[14px] focus:border-green focus:outline-none focus:ring-0 focus-visible:border-green"
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
                                    className="mb-6 h-[38px] min-h-[3rem] w-full rounded-lg border border-solid border-[#C5D1CF] p-3 text-[14px] focus:border-green focus:outline-none focus:ring-0 focus-visible:border-green"
                                    placeholder="Enter last name"
                                    id="LNAME"
                                    maxLength={256}
                                    required
                                />
                            </div>
                            <div className="col-span-2 row-span-1 block md:col-span-1">
                                <label
                                    htmlFor="EMAIL"
                                    className="mb-4 block font-bold opacity-70"
                                >
                                    Email
                                </label>
                                <input
                                    className="mb-6 h-[38px] min-h-[3rem] w-full rounded-lg border border-solid border-[#C5D1CF] p-3 text-[14px] focus:border-green focus:outline-none focus:ring-0 focus-visible:border-green"
                                    placeholder="Enter email"
                                    id="EMAIL"
                                    maxLength={256}
                                    required
                                />
                            </div>
                            <div className="col-span-2 row-span-1 block md:col-span-1">
                                <label
                                    htmlFor="CITY"
                                    className="mb-4 block font-bold opacity-70"
                                >
                                    City you live in
                                </label>
                                <input
                                    className="mb-6 h-[38px] min-h-[3rem] w-full rounded-lg border border-solid border-[#C5D1CF] p-3 text-[14px] focus:border-green focus:outline-none focus:ring-0 focus-visible:border-green"
                                    placeholder="Enter city name"
                                    id="CITY"
                                    maxLength={256}
                                    required
                                />
                            </div>
                            <div className="col-span-2 row-span-1">
                                <label
                                    htmlFor="REFERRAL"
                                    className="mb-4 block font-bold opacity-70"
                                >
                                    Who do you know from Amisplace?
                                </label>
                                <input
                                    className="mb-6 h-[38px] min-h-[3rem] w-full rounded-lg border border-solid border-[#C5D1CF] p-3 text-[14px] focus:border-green focus:outline-none focus:ring-0 focus-visible:border-green"
                                    id="REFERRAL"
                                    maxLength={256}
                                    required
                                />
                            </div>
                            <div className="col-span-2 row-span-1">
                                <label
                                    htmlFor="CONNECTION"
                                    className="mb-4 block font-bold opacity-70"
                                >
                                    How did you hear about us? (optional)
                                </label>
                                <input
                                    className="mb-6 h-[38px] min-h-[3rem] w-full rounded-lg border border-solid border-[#C5D1CF] p-3 text-[14px] focus:border-green focus:outline-none focus:ring-0 focus-visible:border-green"
                                    id="CONNECTION"
                                    maxLength={256}
                                />
                            </div>
                            <div className="col-span-2 row-span-1">
                                <label
                                    htmlFor="ANYTHINGELSE"
                                    className="mb-4 block font-bold opacity-70"
                                >
                                    Anything else we should know? (optional)
                                </label>
                                <textarea
                                    className="mb-6 min-h-[8rem] w-full resize-none overflow-auto rounded-lg border border-solid border-[#C5D1CF] p-3 text-[14px] focus:border-green focus:outline-none focus:ring-0 focus-visible:border-green"
                                    id="ANYTHINGELSE"
                                    placeholder="Enter message"
                                />
                            </div>
                            <div className="col-span-2 row-span-1">
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
                            <div className="col-span-2 row-span-1 mt-4 flex flex-col transition duration-200 ease-in-out hover:scale-105">
                                <input
                                    type="submit"
                                    value="Submit"
                                    className="cursor-pointer rounded-md bg-green px-[2.625rem] py-3 text-center text-xl font-bold text-white"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinBody;
