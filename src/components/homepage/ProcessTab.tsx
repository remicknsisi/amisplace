import React from "react";

import { motion } from "framer-motion";

interface ProcessTabProps {
    activeTab: string;
    setActiveTab: (arg: string) => void;
}

const ProcessTab = ({ activeTab, setActiveTab }: ProcessTabProps) => {
    return (
        <div className="flex justify-start flex-col pt-4 w-full h-full max-w-[29rem]">
            <div className="w-full">
                <div className="flex justify-center ">
                    <button
                        className={`w-full h-12 flex justify-center pt-4 pb-12 px-2 ${
                            activeTab === "Guest"
                                ? "border-b-2 text-green border-green"
                                : "border-b-2"
                        }`}
                        onClick={() => setActiveTab("Guest")}
                    >
                        <span
                            className={`${
                                activeTab === "Host" && `opacity-10`
                            } font-bold text-xl`}
                        >
                            Guest
                        </span>
                    </button>
                    <button
                        className={`w-full h-12 flex justify-center pt-4 pb-12 px-2 ${
                            activeTab === "Host"
                                ? "border-b-2 text-green border-green"
                                : "border-b-2"
                        }`}
                        onClick={() => setActiveTab("Host")}
                    >
                        <span
                            className={`${
                                activeTab === "Guest" && `opacity-10`
                            } font-bold text-xl`}
                        >
                            Host
                        </span>
                    </button>
                </div>
            </div>

            {activeTab === "Guest" && (
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0.5 },
                    }}
                >
                    <div className="mt-8">
                        <div className="flex mb-4">
                            <div className="flex flex-none rounded-full bg-lightGreen-50 justify-center items-center w-11 h-11 mr-8">
                                <img
                                    src="/assets/logos/marketplace.svg"
                                    alt="Marketplace icon"
                                />
                            </div>
                            <div className="text-left">
                                <h3 className="mb-2 text-lg font-bold">
                                    Marketplace (Members Hub)
                                </h3>
                                <p>
                                    Be in the know with access to an exclusive
                                    listings page, new rentals, and featured
                                    cities as an Amisplace member.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="flex mb-4">
                            <div className="flex flex-none rounded-full bg-lightGreen-50 justify-center items-center w-11 h-11 mr-8">
                                <img
                                    src="/assets/logos/message.svg"
                                    alt="Marketplace icon"
                                />
                            </div>
                            <div className="text-left">
                                <h3 className="mb-2 text-lg font-bold">
                                    Message us
                                </h3>
                                <p>
                                    See a place that catches your eye? Send us a
                                    message.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="flex mb-4">
                            <div className="flex flex-none rounded-full bg-lightGreen-50 justify-center items-center w-11 h-11 mr-8">
                                <img
                                    src="/assets/logos/match.svg"
                                    alt="Marketplace icon"
                                />
                            </div>
                            <div className="text-left">
                                <h3 className="mb-2 text-lg font-bold">
                                    Match
                                </h3>
                                <p>
                                    Get matched up with prospective hosts and
                                    places that meet all of your needs.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="flex mb-4">
                            <div className="flex flex-none rounded-full bg-lightGreen-50 justify-center items-center w-11 h-11 mr-8">
                                <img
                                    src="/assets/logos/magic.svg"
                                    alt="Marketplace icon"
                                />
                            </div>
                            <div className="text-left">
                                <h3 className="mb-2 text-lg font-bold">
                                    Magic
                                </h3>
                                <p>
                                    Once a connection is made, it’s time to pack
                                    your bags. Your new home awaits!
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}

            {activeTab === "Host" && (
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0.5 },
                    }}
                >
                    <div className="mt-8">
                        <div className="flex mb-4">
                            <div className="flex flex-none rounded-full bg-lightGreen-50 justify-center items-center w-11 h-11 mr-8">
                                <img
                                    src="/assets/logos/marketplace.svg"
                                    alt="Marketplace icon"
                                />
                            </div>
                            <div className="text-left">
                                <h3 className="mb-2 text-lg font-bold">
                                    Marketplace (Members Hub)
                                </h3>
                                <p>
                                    Amisplace members get access to an exclusive
                                    listings page with available places. Add
                                    your home to our listings page today!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="flex mb-4">
                            <div className="flex flex-none rounded-full bg-lightGreen-50 justify-center items-center w-11 h-11 mr-8">
                                <img
                                    src="/assets/logos/message.svg"
                                    alt="Marketplace icon"
                                />
                            </div>
                            <div className="text-left">
                                <h3 className="mb-2 text-lg font-bold">
                                    Message us
                                </h3>
                                <p>
                                    Fill out a form to add your home to our
                                    exclusive listings page.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="flex mb-4">
                            <div className="flex flex-none rounded-full bg-lightGreen-50 justify-center items-center w-11 h-11 mr-8">
                                <img
                                    src="/assets/logos/match.svg"
                                    alt="Marketplace icon"
                                />
                            </div>
                            <div className="text-left">
                                <h3 className="mb-2 text-lg font-bold">
                                    Match
                                </h3>
                                <p>
                                    Let us pair you with prospective guests who
                                    will love your home as much as you do.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="flex mb-4">
                            <div className="flex flex-none rounded-full bg-lightGreen-50 justify-center items-center w-11 h-11 mr-8">
                                <img
                                    src="/assets/logos/magic.svg"
                                    alt="Marketplace icon"
                                />
                            </div>
                            <div className="text-left">
                                <h3 className="mb-2 text-lg font-bold">
                                    Magic
                                </h3>
                                <p>
                                    Once they’re booked, it’s time to get ready
                                    – your new friends are coming to stay!
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default ProcessTab;
