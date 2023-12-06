"use client";

import { Session } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import HamburgerIcon from "../../../public/assets/logos/hamburger_icon";
import { poppins } from "../../helpers/loadFont";

interface NavbarProps {
    requiresPadding?: boolean;
    session: Session | null;
}

const Navbar = ({ requiresPadding = true, session }: NavbarProps) => {
    const router = useRouter();
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
                            className={`float-right hidden justify-end md:flex md:items-center ${poppins.className}`}
                        >
                            <button
                                onClick={() => router.push("/join")}
                                className="mx-2 flex h-[40px] items-center justify-center rounded-xl bg-green px-8 py-2 text-[.9375rem] font-semibold tracking-wide text-white transition duration-200 ease-in-out hover:scale-105"
                            >
                                Apply now
                            </button>
                            {session ? (
                                <form action="/auth/logout" method="post">
                                    <button className="color-[#222222] flex items-center justify-center px-4 py-6 text-[.9375rem] font-semibold tracking-wide transition duration-200 ease-in-out hover:text-green">
                                        Logout
                                    </button>
                                </form>
                            ) : (
                                <a
                                    href="/login"
                                    className="color-[#222222] flex items-center justify-center px-4 py-6 text-[.9375rem] font-semibold tracking-wide transition duration-200 ease-in-out hover:text-green"
                                >
                                    Login
                                </a>
                            )}
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
                className={`fixed z-10 mx-auto w-full duration-500 ease-in-out md:hidden${
                    isMenuOpen ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <div className={`bg-white ${requiresPadding && "mt-16"}`}>
                    <div className="flex w-full justify-center">
                        <button
                            onClick={() => router.push("/join")}
                            className="mt-4 flex h-[40px] items-center justify-center rounded-xl bg-green px-8 py-6 text-[.9375rem] font-semibold tracking-wide text-white transition duration-200 ease-in-out hover:scale-105"
                        >
                            Apply now
                        </button>
                    </div>
                    {session ? (
                        <form action="/auth/logout" method="post">
                            <button className="color-[#222222] flex items-center justify-center px-4 py-6 text-[.9375rem] font-semibold tracking-wide transition duration-200 ease-in-out hover:text-green">
                                Logout
                            </button>
                        </form>
                    ) : (
                        <a
                            href="/login"
                            className="color-[#222222] flex items-center justify-center px-4 py-6 text-[.9375rem] font-semibold tracking-wide transition duration-200 ease-in-out hover:text-green"
                        >
                            Login
                        </a>
                    )}
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
