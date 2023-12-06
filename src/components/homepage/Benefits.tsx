"use client";

import { motion } from "framer-motion";
import React from "react";

import { poppins } from "../../helpers/loadFont";
import BenefitsCard from "./BenefitsCard";

const Benefits = () => {
    return (
        <div className="px-5 md:px-10">
            <div className="mx-auto w-full max-w-[80rem] py-14">
                <div className="flex flex-col text-center">
                    <div className="mx-auto my-12 max-w-[47rem] items-center justify-center">
                        <h2
                            className={`mb-8 text-[2.5rem] ${poppins.className}`}
                        >
                            Where every guest becomes family
                        </h2>
                        <p className="text-xl font-light">
                            Amisplace is an invite-only community that offers
                            affordable short-term stays amongst friends. Travel
                            with ease with people you trust.
                        </p>
                    </div>
                    <div className="grid-col-1fr mx-auto grid auto-cols-[1fr] items-center justify-center gap-10 lg:grid-cols-[1fr,1fr,1fr]">
                        <motion.div
                            className="h-full"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                ease: "easeInOut",
                                duration: 1,
                                delay: 0.25,
                            }}
                        >
                            <BenefitsCard
                                imgPath="/assets/logos/protection.svg"
                                imgAlt="Image a checkmark inside a shield indicating safety."
                                cardTitle="People you can trust"
                                cardSubtitle="Guests and hosts are vetted to ensure safe connections and an enjoyable community experience."
                            />
                        </motion.div>
                        <motion.div
                            className="h-full"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                ease: "easeInOut",
                                duration: 1,
                                delay: 0.5,
                            }}
                        >
                            <BenefitsCard
                                imgPath="/assets/logos/host-homes.svg"
                                imgAlt="Image a checkmark inside a shield indicating safety."
                                cardTitle="Real hosts, real homes"
                                cardSubtitle="Hosts love traveling as much as you! Guests get unbeatable prices on fully-furnished rentals while hosts are away on a personal holiday."
                            />
                        </motion.div>
                        <motion.div
                            className="h-full"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                ease: "easeInOut",
                                duration: 1,
                                delay: 0.75,
                            }}
                        >
                            <BenefitsCard
                                imgPath="/assets/logos/community.svg"
                                imgAlt="Image a checkmark inside a shield indicating safety."
                                cardTitle="Community driven"
                                cardSubtitle="Get access to your travel squad wherever you go! Meet other like-minded individuals who love seeing the world as much as you do."
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefits;
