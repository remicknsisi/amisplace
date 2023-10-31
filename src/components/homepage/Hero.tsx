"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import TravelButton from "../common/TravelButton";

import { poppins } from "../../helpers/loadFont";

interface ImageProps {
    src: string;
    alt: string;
    location: string;
}

const Hero = () => {
    const images: ImageProps[] = [
        {
            src: "/assets/listings/hawaii.jpeg",
            alt: "Image of a listing in Big Island, Hawaii.",
            location: "Big Island, Hawaii",
        },
        {
            src: "/assets/listings/brooklyn.jpeg",
            alt: "Image of a listing in Brooklyn, New York",
            location: "Brooklyn, New York",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const imageVariants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="mt-16 bg-lightGreen-50 px-5 md:px-10">
            <div className="ml-auto mr-auto grid max-w-[80rem] auto-cols-[1fr] grid-cols-[1fr] pt-[4rem] md:grid-cols-[1fr,1fr] md:pt-0 lg:gap-6">
                <div className="flex flex-col items-center justify-center md:items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ease: "easeInOut", duration: 0.75 }}
                        className="mb-10 text-center md:mb-0 md:text-left"
                    >
                        <div className="mb-8 md:mb-12">
                            <h1
                                className={`text-[2.5rem] font-semibold leading-[1.1] tracking-[0.00625em] md:text-[3.125rem] xl:text-[3.4375rem] ${poppins.className}`}
                            >
                                <span className="inline md:block">
                                    Staying at a{" "}
                                </span>
                                <span className="inline md:block">
                                    friend&apos;s made
                                </span>
                                <span> simple</span>
                            </h1>
                        </div>
                        <TravelButton />
                    </motion.div>
                </div>
                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            ease: "easeInOut",
                            duration: 2,
                            delay: 0.375,
                        }}
                        className="hidden flex-col items-center justify-end gap-3 md:mb-4 md:flex"
                    >
                        {images.map((_, index) => (
                            <button
                                key={index}
                                tabIndex={0}
                                className={`h-4 w-4 rounded-full ${
                                    currentIndex === index
                                        ? "bg-[#409D8C]"
                                        : "bg-[#409D8C]/[.2]"
                                }`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentIndex(index);
                                }}
                                onKeyDown={(e) => {
                                    if (
                                        e.key === "Enter" ||
                                        e.key === "Space"
                                    ) {
                                        setCurrentIndex(index);
                                    }
                                }}
                            />
                        ))}
                    </motion.div>
                    <motion.div
                        className="relative ml-0 h-[22rem] overflow-hidden rounded-tl-[30vw] md:ml-[20px] md:h-[29rem] md:rounded-tl-[16rem] lg:h-[32.375rem]"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        key={currentIndex}
                        variants={imageVariants}
                        transition={{
                            duration: 0.75,
                            ease: "linear",
                        }}
                    >
                        <motion.img
                            src={images[currentIndex].src}
                            alt={images[currentIndex].alt}
                            className="h-full w-full object-cover"
                        />
                        <p className="caption">
                            {images[currentIndex].location}
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
