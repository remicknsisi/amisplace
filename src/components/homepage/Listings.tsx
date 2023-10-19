import React from "react";
import { motion } from "framer-motion";

import ListingCard from "../ListingCard";

import { poppins } from "../../helpers/loadFont";

const Listings = () => {
    return (
        <div className="px-5 md:px-10">
            <div className="max-w-[80rem] w-full mx-auto py-14">
                <div className="flex flex-col text-center">
                    <div className="mx-auto mb-16 items-center justify-center max-w-[47rem]">
                        <h2
                            className={`text-[2.5rem] mb-8 ${poppins.className}`}
                        >
                            What you can get
                        </h2>
                        <p className="text-xl font-light">
                            Current listings are available to Amisplace members
                            only.
                        </p>
                    </div>
                </div>
                <div className="grid gri-col-1fr md:max-w-[70rem] md:grid-cols-[1fr,1fr,1fr] auto-cols-[1fr] justify-center items-center mx-auto gap-10">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            ease: "easeInOut",
                            duration: 1,
                            delay: 0.25,
                        }}
                    >
                        <ListingCard
                            imgPath="/assets/listings/paris.jpeg"
                            imgAlt="Picture of a 1 bedroom / 1 bathroom apartment in Paris, France."
                            location="Paris, France"
                            description="1BR/1BA chic and cozy apartment"
                            area="14th District (Pernety)"
                            price="108"
                            duration="night"
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
                        <ListingCard
                            imgPath="/assets/listings/big-island.jpeg"
                            imgAlt="Picture of a 2 bedroom / 2 bathroom apartment in Big Island, Hawaii."
                            location="Big Island, Hawaii"
                            description="2BR/2BA house close to white sand beaches"
                            area="Waikoloa Village"
                            price="2800"
                            duration="month"
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
                        <ListingCard
                            imgPath="/assets/listings/san-francisco.jpeg"
                            imgAlt="Picture of a studio apartment in San Francisco, California."
                            location="San Francisco, CA"
                            description="Private studio next to cute shops and restaurants"
                            area="Hayes Valley"
                            price="82"
                            duration="night"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Listings;
