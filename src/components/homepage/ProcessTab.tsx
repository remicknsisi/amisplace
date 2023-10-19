import React from "react";

import { motion } from "framer-motion";

import ProcessTabRow from "./ProcessTabRow";

interface ProcessTabProps {
    activeTab: string;
    setActiveTab: (arg: string) => void;
}

const ProcessTab = ({ activeTab, setActiveTab }: ProcessTabProps) => {
    return (
        <div className="flex justify-start flex-col pt-4 w-full h-full max-w-[29rem]">
            <div className="w-full">
                <div className="flex justify-center">
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
                    <ProcessTabRow
                        header="Marketplace (Members Hub)"
                        subtitle="Be in the know with access to an exclusive listings page, new rentals, and featured cities as an Amisplace member."
                        imgIcon="Marketplace"
                        imgSrc="/assets/logos/marketplace.svg"
                        isFirstElement
                    />
                    <ProcessTabRow
                        header="Message us"
                        subtitle="See a place that catches your eye? Send us a message."
                        imgIcon="Message"
                        imgSrc="/assets/logos/message.svg"
                        isFirstElement={false}
                    />
                    <ProcessTabRow
                        header="Match"
                        subtitle="Get matched up with prospective hosts and places that meet all of your needs."
                        imgIcon="Match"
                        imgSrc="/assets/logos/match.svg"
                        isFirstElement={false}
                    />
                    <ProcessTabRow
                        header="Magic"
                        subtitle="Once a connection is made, it’s time to pack your bags. Your new home awaits!"
                        imgIcon="Magic"
                        imgSrc="/assets/logos/magic.svg"
                        isFirstElement={false}
                    />
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
                    <ProcessTabRow
                        header="Marketplace (Members Hub)"
                        subtitle="Amisplace members get access to an exclusive listings page with available places. Add your home to our listings page today!"
                        imgIcon="Marketplace"
                        imgSrc="/assets/logos/marketplace.svg"
                        isFirstElement
                    />
                    <ProcessTabRow
                        header="Message us"
                        subtitle="Fill out a form to add your home to our exclusive listings page."
                        imgIcon="Message"
                        imgSrc="/assets/logos/message.svg"
                        isFirstElement={false}
                    />
                    <ProcessTabRow
                        header="Match"
                        subtitle="Let us pair you with prospective guests who will love your home as much as you do."
                        imgIcon="Match"
                        imgSrc="/assets/logos/match.svg"
                        isFirstElement={false}
                    />
                    <ProcessTabRow
                        header="Magic"
                        subtitle="Once they’re booked, it’s time to get ready – your new friends are coming to stay!"
                        imgIcon="Magic"
                        imgSrc="/assets/logos/magic.svg"
                        isFirstElement={false}
                    />
                </motion.div>
            )}
        </div>
    );
};

export default ProcessTab;
