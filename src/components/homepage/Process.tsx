import React, { useState } from "react";

import { motion } from "framer-motion";

import ProcessTab from "./ProcessTab";

import { poppins } from "../../helpers/loadFont";

const Process = () => {
    const [activeTab, setActiveTab] = useState("Guest");
    return (
        <div className="px-5 md:px-10 bg-offWhite">
            <div className="max-w-[80rem] w-full mx-auto py-14">
                <div className="flex flex-col text-center">
                    <div className="mx-auto items-center justify-center max-w-[47rem]">
                        <h2
                            className={`text-[2.5rem] mb-8 ${poppins.className}`}
                        >
                            How it works
                        </h2>
                    </div>
                    <div className="grid gri-col-1fr md:grid-cols-[1fr,1fr] auto-cols-[1fr] w-full items-center mx-auto gap-10">
                        {activeTab === "Guest" && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    ease: "easeInOut",
                                    duration: 1,
                                    delay: 0.25,
                                }}
                                className="flex justify-center md:justify-end"
                            >
                                <div className="h-[90%] w-[90%]">
                                    <img
                                        src="/assets/guest-landing-page.jpeg"
                                        alt="Two women smiling."
                                        className="rounded-3xl"
                                    />
                                </div>
                            </motion.div>
                        )}
                        {activeTab === "Host" && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    ease: "easeInOut",
                                    duration: 1,
                                    delay: 0.25,
                                }}
                                className="flex justify-center md:justify-end"
                            >
                                <div className="h-[90%] w-[90%]">
                                    <img
                                        src="/assets/host-landing-page.jpeg"
                                        alt="Two women smiling."
                                        className="rounded-3xl"
                                    />
                                </div>
                            </motion.div>
                        )}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                ease: "easeInOut",
                                duration: 1,
                                delay: 0.5,
                            }}
                            className="flex justify-center"
                        >
                            <ProcessTab
                                activeTab={activeTab}
                                setActiveTab={setActiveTab}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Process;
