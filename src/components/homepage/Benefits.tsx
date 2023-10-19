import React from "react";
import { motion } from "framer-motion";

import BenefitsCard from "./BenefitsCard";

import { poppins } from "../../helpers/loadFont";

const Benefits = () => {
    return (
        <div className="px-5 md:px-10">
            <div className="max-w-[80rem] w-full mx-auto py-14">
                <div className="flex flex-col text-center">
                    <div className="mx-auto my-12 items-center justify-center max-w-[47rem]">
                        <h2
                            className={`text-[2.5rem] mb-8 ${poppins.className}`}
                        >
                            Where every guest becomes family
                        </h2>
                        <p className="text-xl font-light">
                            Amisplace is an invite-only community that offers
                            affordable short-term stays amongst friends. Travel
                            with ease with people you trust.
                        </p>
                    </div>
                    <div className="grid grid-col-1fr lg:grid-cols-[1fr,1fr,1fr] auto-cols-[1fr] justify-center items-center mx-auto gap-10">
                        <motion.div
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
