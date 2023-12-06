import React from "react";

interface FooterProps {
    requiresPadding?: boolean;
}

const Footer = ({ requiresPadding = true }: FooterProps) => {
    return (
        <div
            className={`${
                requiresPadding ? "pt-[7.25rem]" : ""
            } z-100 bg-white`}
        >
            <footer className="border-t border-[#2f30301a]">
                <div className="mx-auto w-full max-w-[80rem] px-5 md:px-10">
                    <div className="flex items-center justify-center">
                        <p className="py-3 font-light md:text-sm lg:text-base">
                            © Amisplace, 2023
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
