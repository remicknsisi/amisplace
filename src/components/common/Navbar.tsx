import React, { useState } from "react";

import HamburgerIcon from "../../../public/assets/logos/hamburger_icon";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="px-5 md:px-10">
            <div className="w-full max-w-7xl mx-auto">
                <div className="flex h-16 justify-between">
                    <a
                        href="/"
                        className="flex w-44 justify-center items-center"
                    >
                        <img
                            src="/assets/amisplace_logo.svg"
                            alt="Logo for Amisplace"
                        />
                    </a>
                    <nav
                        role="navigation"
                        className="hidden md:flex justify-end float-right"
                    >
                        <a
                            href="/join"
                            className="flex justify-center items-center py-6 px-4 font-semibold color-[#222222] text-[.9375rem] tracking-wide transition ease-in-out duration-200 hover:text-green"
                        >
                            Join now
                        </a>
                        <a
                            href="/about"
                            className="flex justify-center items-center py-6 px-4 font-semibold color-[#222222] text-[.9375rem] tracking-wide transition ease-in-out duration-200 hover:text-green"
                        >
                            About us
                        </a>
                    </nav>
                    <div className="block w-20 pt-[20px] pb-[22px] pl-[22px] md:hidden">
                        <div className="w-6 h-6 ml-auto">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
    );
};

export default Navbar;
