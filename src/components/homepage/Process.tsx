"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { poppins } from "../../helpers/loadFont";
import ProcessTab from "./ProcessTab";

const Process = () => {
    const [activeTab, setActiveTab] = useState("Guest");
    return (
        <div className="bg-offWhite px-5 md:px-10">
            <div className="mx-auto w-full max-w-[80rem] py-14">
                <div className="flex flex-col text-center">
                    <div className="mx-auto max-w-[47rem] items-center justify-center">
                        <h2
                            className={`mb-8 text-[2.5rem] ${poppins.className}`}
                        >
                            How it works
                        </h2>
                    </div>
                    <div className="gri-col-1fr mx-auto grid w-full auto-cols-[1fr] items-center gap-10 md:grid-cols-[1fr,1fr]">
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
