import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
        <div className="px-5 md:px-10 bg-lightGreen-50">
            <div className="grid grid-cols-[1fr] pt-[4rem] md:pt-0 md:grid-cols-[1fr,1fr] auto-cols-[1fr] gap-6 max-w-[80rem] ml-auto mr-auto">
                <div className="flex flex-col items-center md:items-start justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ease: "easeInOut", duration: 0.75 }}
                        className="text-center md:text-left mb-10 md:mb-0"
                    >
                        <div className="mb-8 md:mb-12">
                            <h1
                                className={`leading-[1.1] text-[2.5rem] md:text-[3.125rem] xl:text-[3.4375rem] tracking-[0.00625em] font-semibold ${poppins.className}`}
                            >
                                <span className="inline md:block">Staying at a </span>
                                <span className="inline md:block">
                                    friend&apos;s made
                                </span>
                                <span> simple</span>
                            </h1>
                        </div>
                        <div className="hover:scale-105 transition ease-in-out duration-200">
                            <a
                                href="/join"
                                className="bg-green text-white rounded-lg py-3 px-11 tracking-wide font-bold hover:bg-darkGreen"
                            >
                                Travel with Amisplace
                            </a>
                        </div>
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
                        className="items-center md:mb-4 justify-end flex-col gap-3 hidden md:flex"
                    >
                        {images.map((_, index) => (
                            <button
                                key={index}
                                tabIndex={0}
                                className={`rounded-full h-4 w-4 ${
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
                        className="image-container h-[22rem] rounded-tl-[30vw] md:rounded-tl-[16rem] md:h-[33.375rem] ml-0 md:ml-[20px] relative"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        key={currentIndex}
                        variants={imageVariants}
                        transition={{
                            duration: .75,
                            ease: "linear",
                        }}
                    >
                        <motion.img
                            src={images[currentIndex].src}
                            alt={images[currentIndex].alt}
                            className="w-full h-full object-cover"
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
