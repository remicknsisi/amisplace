"use client";

import React, { useState } from "react";

import { motion } from "framer-motion";
import { poppins } from "../../helpers/loadFont";

import HamburgerIcon from "../../../public/assets/logos/hamburger_icon";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <div className="px-5 md:px-10 fixed w-full bg-[white] z-[1000] top-0">
                <div className="mx-auto w-full max-w-7xl">
                    <div className="flex h-16 justify-between">
                        <a
                            href="/"
                            className="flex w-44 items-center justify-center"
                        >
                            <img
                                src="/assets/amisplace_logo.svg"
                                alt="Logo for Amisplace"
                            />
                        </a>
                        <nav
                            role="navigation"
                            className={`float-right hidden justify-end md:flex ${poppins.className}`}
                        >
                            <a
                                href="/join"
                                className="color-[#222222] flex items-center justify-center px-4 py-6 text-[.9375rem] font-semibold tracking-wide transition duration-200 ease-in-out hover:text-green"
                            >
                                Join now
                            </a>
                            <a
                                href="/about"
                                className="color-[#222222] flex items-center justify-center px-4 py-6 text-[.9375rem] font-semibold tracking-wide transition duration-200 ease-in-out hover:text-green"
                            >
                                About us
                            </a>
                        </nav>
                        <div className="block w-20 pb-[22px] pl-[22px] pt-[20px] md:hidden">
                            <div className="ml-auto h-6 w-6">
                                <button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                >
                                    {isMenuOpen ? (
                                        <span className="text-[2.25rem] font-light leading-[.4] text-[#2e2f2f]">
                                            &times;
                                        </span>
                                    ) : (
                                        <HamburgerIcon />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.35,
                    }}
                    className="absolute w-full"
                >
                    <div className="mx-auto w-full max-w-7xl md:hidden">
                        <div className="bg-white shadow-md">
                            <a
                                href="/join"
                                className="block py-6 text-center text-[.9375rem] font-semibold tracking-wide text-[#222222] transition duration-200 ease-in-out hover:text-green"
                            >
                                Join now
                            </a>
                            <a
                                href="/about"
                                className="block py-6 text-center text-[.9375rem] font-semibold tracking-wide text-[#222222] transition duration-200 ease-in-out hover:text-green"
                            >
                                About us
                            </a>
                        </div>
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default Navbar;
