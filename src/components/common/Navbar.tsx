import React from "react";

const Navbar = () => {
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
                    {/* TODO: Add mobile hamburger menu or something else */}
                    <nav
                        role="navigation"
                        className="flex justify-end float-right"
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
                </div>
            </div>
        </div>
    );
};

export default Navbar;
