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
        <div className="flex flex-col items-stretch justify-items-center md:w-[54rem] max-w-[54rem]">
            <button
                className="flex items-center md:items-start justify-between pt-6"
                onClick={onToggle}
            >
                <h3
                    className={`leading-[1.5] md:leading-[1.1] text-[1.2rem] md:text-[1.4rem] tracking-[0.00625em] md:font-semibold text-left md:text-center ${poppins.className}`}
                >
                    {question}
                </h3>
                <div className="flex-none ml-4">
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
                    <p className="text-left mt-6 font-light">{answer}</p>
                    <div className="h-px rounded-[100vw] mt-5 bg-gray-200"></div>
                </motion.div>
            )}
            {!isOpen && (
                <div className="h-px rounded-[100vw] mt-5 bg-gray-200"></div>
            )}
        </div>
    );
};

export default FAQAccordionRow;
