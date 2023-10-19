import React, { useState } from "react";
import { motion } from "framer-motion";

import FAQAccordionRow from "./FAQAccordionRow";

import data from "../../../public/text/FAQs.json";

import { poppins } from "../../helpers/loadFont";

const FAQs = () => {
    const { faqs } = data;
    const [expandedRows, setExpandedRows] = useState<number[]>([]);

    const toggleRow = (index: number) => {
        if (expandedRows.includes(index)) {
            setExpandedRows((prev) => prev.filter((i) => i !== index));
        } else {
            setExpandedRows((prev) => [...prev, index]);
        }
    };
    return (
        <div className="flex flex-col items-center text-center px-12 mt-20 mx-auto md:px-0 md:mx-0 max-w-[660px] md:max-w-none">
            <div className="px-5 pb-5">
                <h2 className="font-bold text-4xl mb-8">FAQs</h2>
            </div>
            <div className="faq-accordion">
                {faqs.map((item, index) => (
                    <FAQAccordionRow
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        isOpen={expandedRows.includes(index)}
                        onToggle={() => toggleRow(index)}
                    />
                ))}
                <div className="flex flex-col items-stretch justify-items-center max-w-[45rem] md:w-[54rem] lg:max-w-[54rem]">
                    <button
                        className="flex items-center md:items-start justify-between pt-6"
                        onClick={() => toggleRow(5)}
                    >
                        <h3
                            className={`leading-[1.5] md:leading-[1.1] text-[1.2rem] md:text-[1.4rem] tracking-[0.00625em] md:font-semibold text-left md:text-center ${poppins.className}`}
                        >
                            I love Amisplace! Can I help out?
                        </h3>
                        <div className="flex-none ml-4">
                            {expandedRows.includes(5) ? (
                                <img
                                    src="/assets/logos/minus.svg"
                                    alt="Minus icon"
                                />
                            ) : (
                                <img
                                    src="/assets/logos/plus.svg"
                                    alt="Plus icon"
                                />
                            )}
                        </div>
                    </button>
                    {expandedRows.includes(5) && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                ease: "easeIn",
                                duration: 0.25,
                            }}
                        >
                            <p className="text-left mt-6 font-light">
                                Yes, please send a message to{" "}
                                <a
                                    className="text-green"
                                    href="mailto:amy@amisplace.com?subject=General Queries"
                                >
                                    amy@amisplace.com
                                </a>
                                . We&apos;d love to talk to you and figure out
                                how you can help.
                            </p>
                            <div className="h-px rounded-[100vw] mt-5 bg-gray-200"></div>
                        </motion.div>
                    )}
                    {!expandedRows.includes(5) && (
                        <div className="h-px rounded-[100vw] mt-5 bg-gray-200"></div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FAQs;
