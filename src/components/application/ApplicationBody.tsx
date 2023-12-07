"use client";

import { profilePartialType } from "@/utils/zod-schemas/profile";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

import { poppins } from "../../helpers/loadFont";

enum EntranceStatus {
    KNOWN = "known",
    UNKNOWN = "unknown",
}

const ApplicationBody = ({ profile }: { profile: profilePartialType }) => {
    const router = useRouter();
    const defaultEntranceStatus =
        profile.application_referral_first_name ||
        profile.application_referral_last_name
            ? EntranceStatus.KNOWN
            : profile.application_heard_from
              ? EntranceStatus.UNKNOWN
              : null;
    const [optionSelected, setOptionSelected] = useState<EntranceStatus | null>(
        defaultEntranceStatus
    );

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const response = await fetch(`/api/profiles/${profile.id}`, {
            method: "PATCH",
            body: formData,
        });

        const data = await response.json();
        if (data?.success) {
            router.push("/host/interested");
        } else {
            // TODO: deal with error
        }
    }
    return (
        <div className="mt-[4.5rem] flex justify-center md:mt-0">
            <div className="flex max-w-[41rem] justify-start">
                <div className="px-5 md:px-8">
                    <div className="mx-auto w-full max-w-[80rem] pb-[4.5rem]">
                        <div className="flex flex-col justify-center pt-4 text-left md:pt-[7rem]">
                            <h1
                                className={`${poppins.className} text-[2rem] font-bold md:text-[2.5rem]`}
                            >
                                Application
                            </h1>
                            <p className="my-4 text-xl font-light opacity-70">
                                Our community is built on trust, so it&apos;s
                                important we get to know each one of you
                                interested in joining Amisplace.
                            </p>
                            <form
                                className="grid grid-cols-[1fr,1fr] grid-rows-[1fr] gap-x-6 gap-y-0"
                                onSubmit={onSubmit}
                            >
                                <div className="col-span-2 mt-4 border-b border-b-[#C5D1CF]">
                                    <label
                                        className="mb-4 block font-bold opacity-70"
                                        htmlFor="introduction"
                                    >
                                        Tell us about yourself&nbsp;
                                        <span className="ml-1">&#128172;</span>
                                        <p className="font-light">
                                            Why do you want to join Amisplace?
                                        </p>
                                        <textarea
                                            className="mb-4 mt-2 min-h-[10rem] w-full resize-none rounded-lg border border-solid border-[#C5D1CF] p-3 text-[14px] font-light focus:border-green focus:outline-none focus:ring-0 focus-visible:border-green"
                                            name="application_about"
                                            defaultValue={
                                                profile.application_about
                                            }
                                            maxLength={350}
                                        />
                                    </label>
                                </div>
                                <div className="col-span-2 mt-8">
                                    <label className="mb-4 block font-bold opacity-70">
                                        Where are you based?&nbsp;
                                        <span className="ml-1">&#127758;</span>
                                        <p className="font-light">
                                            City, state, country
                                        </p>
                                        <input
                                            className="my-4 h-[38px] min-h-[3rem] w-full rounded-lg border border-solid border-[#C5D1CF] p-3 text-[14px] focus:border-green focus:outline-none focus:ring-0 focus-visible:border-green"
                                            name="location_full"
                                            defaultValue={profile.location_full}
                                            maxLength={256}
                                            required
                                        />
                                    </label>
                                </div>
                                <div className="col-span-2 row-span-1 mb-8 block">
                                    <span className="mb-4 block font-bold opacity-70">
                                        Which best describes you?
                                    </span>
                                    <label className="flex">
                                        <input
                                            type="radio"
                                            name="entrance_status"
                                            className="mr-2"
                                            defaultChecked={
                                                defaultEntranceStatus ==
                                                EntranceStatus.KNOWN
                                            }
                                            onClick={() =>
                                                setOptionSelected(
                                                    EntranceStatus.KNOWN
                                                )
                                            }
                                        />
                                        I know someone from Amisplace
                                    </label>
                                    <label className="mb-2 mt-6 flex">
                                        <input
                                            type="radio"
                                            name="entrance_status"
                                            className="mr-2 font-light"
                                            defaultChecked={
                                                defaultEntranceStatus ==
                                                EntranceStatus.UNKNOWN
                                            }
                                            onClick={() =>
                                                setOptionSelected(
                                                    EntranceStatus.UNKNOWN
                                                )
                                            }
                                        />
                                        I don&apos;t know anyone from Amisplace
                                        yet
                                    </label>
                                </div>
                                {optionSelected === EntranceStatus.KNOWN && (
                                    <>
                                        <div className="col-span-2 mb-4">
                                            <h4 className="block font-bold opacity-70">
                                                Who do you know from Amisplace?
                                            </h4>
                                            <p className="font-light">
                                                If you know multiple people,
                                                who’s your favorite?
                                                <span className="ml-2">
                                                    &#128517;
                                                </span>
                                            </p>
                                        </div>
                                        <div className="col-span-1 row-span-1 block">
                                            <label className="mb-4 block font-bold opacity-70">
                                                First name
                                                <input
                                                    className="mb-6 h-[38px] min-h-[3rem] w-full rounded-lg border border-solid border-[#C5D1CF] p-3 text-[14px] focus:border-green focus:outline-none focus:ring-0 focus-visible:border-green"
                                                    placeholder="Enter first name"
                                                    name="application_referral_first_name"
                                                    defaultValue={
                                                        profile.application_referral_first_name
                                                    }
                                                    maxLength={256}
                                                    required
                                                />
                                            </label>
                                        </div>
                                        <div className="col-span-1 row-span-1 block">
                                            <label className="mb-4 block font-bold opacity-70">
                                                Last name
                                                <input
                                                    className="mb-6 h-[38px] min-h-[3rem] w-full rounded-lg border border-solid border-[#C5D1CF] p-3 text-[14px] focus:border-green focus:outline-none focus:ring-0 focus-visible:border-green"
                                                    placeholder="Enter last name"
                                                    name="application_referral_last_name"
                                                    defaultValue={
                                                        profile.application_referral_last_name
                                                    }
                                                    maxLength={256}
                                                    required
                                                />
                                            </label>
                                        </div>
                                    </>
                                )}
                                {optionSelected === EntranceStatus.UNKNOWN && (
                                    <div className="col-span-2">
                                        <label className="mb-4 block font-bold opacity-70">
                                            How did you hear about Amisplace?
                                            <input
                                                className="my-4 h-[38px] min-h-[3rem] w-full rounded-lg border border-solid border-[#C5D1CF] p-3 text-[14px] focus:border-green focus:outline-none focus:ring-0 focus-visible:border-green"
                                                name="application_heard_from"
                                                maxLength={256}
                                                required
                                            />
                                        </label>
                                    </div>
                                )}
                                <div className="col-span-2 mt-4 flex flex-col transition duration-200 ease-in-out hover:scale-105">
                                    <button
                                        className="cursor-pointer rounded-md bg-green px-[2.625rem] py-3 text-center text-xl font-bold text-white"
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplicationBody;
