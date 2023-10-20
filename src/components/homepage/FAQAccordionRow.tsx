import React from "react";

import { motion } from "framer-motion";

import { poppins } from "../../helpers/loadFont";

interface FAQAccordionRowProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}

const FAQAccordionRow = ({
    question,
    answer,
    isOpen,
    onToggle,
}: FAQAccordionRowProps) => {
    return (
        <div className="flex max-w-[45rem] flex-col items-stretch justify-items-center md:w-[54rem] lg:max-w-[54rem]">
            <button
                className="flex items-center justify-between pt-6 md:items-start"
                onClick={onToggle}
            >
                <h3
                    className={`text-left text-[1.2rem] leading-[1.5] tracking-[0.00625em] md:text-center md:text-[1.4rem] md:font-semibold md:leading-[1.1] ${poppins.className}`}
                >
                    {question}
                </h3>
                <div className="ml-4 flex-none">
                    {isOpen ? (
                        <img src="/assets/logos/minus.svg" alt="Minus icon" />
                    ) : (
                        <img src="/assets/logos/plus.svg" alt="Plus icon" />
                    )}
                </div>
            </button>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        ease: "easeIn",
                        duration: 0.25,
                    }}
                >
                    <p className="mt-6 text-left font-light md:text-lg">
                        {answer}
                    </p>
                    <div className="mt-5 h-px rounded-[100vw] bg-gray-200"></div>
                </motion.div>
            )}
            {!isOpen && (
                <div className="mt-5 h-px rounded-[100vw] bg-gray-200"></div>
            )}
        </div>
    );
};

export default FAQAccordionRow;
