"use client";

import React, { useEffect, useState } from "react";

import { poppins } from "../../helpers/loadFont";

import HamburgerIcon from "../../../public/assets/logos/hamburger_icon";

interface NavbarProps {
    requiresPadding?: boolean;
}

const Navbar = ({ requiresPadding = true }: NavbarProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentPath, setCurrentPath] = useState("");

    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, []);

    return (
        <>
            <div className="fixed top-0 z-[1000] w-full bg-[white] px-5 md:px-10">
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
                                className={`${
                                    currentPath === "/join"
                                        ? "text-green"
                                        : "text-[#222222]"
                                } flex items-center justify-center px-4 py-6 text-[.9375rem] font-semibold tracking-wide transition duration-200 ease-in-out hover:text-green`}
                            >
                                Join now
                            </a>
                            <a
                                href="/about"
                                className={`${
                                    currentPath === "/about"
                                        ? "text-green"
                                        : "text-[#222222]"
                                }  flex items-center justify-center px-4 py-6 text-[.9375rem] font-semibold tracking-wide transition duration-200 ease-in-out hover:text-green`}
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
            <div
                className={`fixed z-10 mx-auto w-full transform duration-500 ease-in-out md:hidden ${
                    isMenuOpen ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <div className={`bg-white ${requiresPadding && "mt-16"}`}>
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
        </>
    );
};

export default Navbar;
