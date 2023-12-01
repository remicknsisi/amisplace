"use client";

import React, { useState } from "react";

import { useRouter } from "next/navigation";

import { poppins } from "../../helpers/loadFont";
import BackButton from "../common/BackButton";
import RoomSelectionTileRow from "./RoomSelectionTileRow";

const AboutHomeBody = () => {
    const router = useRouter();
    const [numberOfBedrooms, setNumberOfBedrooms] = useState("1");
    const [numberOfBathrooms, setNumberOfBathrooms] = useState("1");

    const inputClasses =
        "mt-2 mb-4 h-[38px] min-h-[3rem] w-full rounded-lg border border-solid border-[#C5D1CF] p-3 text-[14px] focus:border-green focus:outline-none focus:ring-0 focus-visible:border-green";
    return (
        <div className="mt-[4.5rem] flex justify-center md:mt-0">
            <div className="flex max-w-[41rem] justify-start">
                <div className="mt-4 px-5 sm:mt-28 md:px-8">
                    <div>
                        <BackButton
                            onClick={() => router.push("/host/interested")}
                        />
                    </div>
                    <div className="mx-auto w-full max-w-[80rem] pb-[4.5rem]">
                        <div className="flex flex-col justify-center pt-4 text-left">
                            <h1
                                className={`${poppins.className} text-[1.75rem] font-bold md:text-[2.5rem]`}
                            >
                                About your home
                            </h1>
                            <p className="mb-8 mt-4 text-xl font-light opacity-70">
                                We&apos;re excited to learn about your home!
                                Don&apos;t worry -- hosts always get a chance to
                                meet guests before committing.
                            </p>
                        </div>
                        <form className="grid grid-cols-[1fr,1fr] grid-rows-[1fr] gap-x-6 gap-y-0">
                            <div className="col-span-2 row-span-1 block">
                                <label
                                    className="mb-4 block font-bold opacity-70"
                                    htmlFor="location"
                                >
                                    Location
                                    <p className="font-light">
                                        City, state, country
                                    </p>
                                    <input
                                        className={inputClasses}
                                        name="location"
                                        maxLength={256}
                                        required
                                    />
                                </label>
                            </div>
                            <div className="col-span-2 row-span-1 block">
                                <label
                                    className="mb-4 block font-bold opacity-70"
                                    htmlFor="neighborhood"
                                >
                                    Neighborhood
                                    <input
                                        className={inputClasses}
                                        name="neighborhood"
                                        type="text"
                                        maxLength={256}
                                        required
                                    />
                                </label>
                            </div>
                            <div className="col-span-2 row-span-1 block">
                                <span className="mb-4 block font-bold opacity-70">
                                    Type of home
                                </span>
                                <label className="flex">
                                    <input
                                        type="radio"
                                        name="homeType"
                                        value="entire_place"
                                        className="mr-2"
                                    />
                                    Entire place
                                </label>
                                <label className="mb-2 mt-6 flex">
                                    <input
                                        type="radio"
                                        name="homeType"
                                        value="private_room"
                                        className="mr-2 font-light"
                                    />
                                    Private room
                                </label>
                                <label className="mb-8 flex items-center">
                                    <input
                                        type="radio"
                                        name="homeType"
                                        value="other"
                                        className="mr-2"
                                    />
                                    Other:
                                    <input
                                        type="text"
                                        className="border-b-solid ml-2 border-b border-[#C5D1CF] p-1 p-4 focus:border-green focus:outline-none focus:ring-0 focus-visible:border-green"
                                    />
                                </label>
                            </div>
                            <div className="col-span-2 row-span-1 mb-4 block sm:mb-8">
                                <h4 className="mb-4 block font-bold opacity-70">
                                    Number of bedrooms
                                </h4>
                                <RoomSelectionTileRow
                                    onSelect={(e) => setNumberOfBedrooms(e)}
                                    selectedValue={numberOfBedrooms}
                                />
                            </div>
                            <div className="col-span-2 row-span-1 mb-8 block sm:mb-12">
                                <h4 className="mb-4 block font-bold opacity-70">
                                    Number of bathrooms
                                </h4>
                                <RoomSelectionTileRow
                                    onSelect={(e) => setNumberOfBathrooms(e)}
                                    selectedValue={numberOfBathrooms}
                                />
                            </div>
                            <div className="col-span-2 row-span-1 block">
                                <label
                                    className="mb-4 block font-bold opacity-70"
                                    htmlFor="availability"
                                >
                                    Upcoming availability
                                    <p className="font-light">
                                        e.g. March 16-29, July 1-20
                                    </p>
                                    <input
                                        className={inputClasses}
                                        name="availability"
                                        type="text"
                                        maxLength={256}
                                        required
                                    />
                                </label>
                            </div>
                            <div className="col-span-2 row-span-1 mt-4 flex flex-col transition duration-200 ease-in-out hover:scale-105">
                                <button
                                    className="cursor-pointer rounded-md bg-green px-[2.625rem] py-3 text-center text-xl font-bold text-white"
                                    onClick={() =>
                                        router.push("/host/more-info")
                                    }
                                >
                                    Next
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHomeBody;
