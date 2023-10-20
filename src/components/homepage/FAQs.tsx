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
        <div className="mx-auto mt-20 flex max-w-[660px] flex-col items-center px-12 text-center md:mx-0 md:max-w-none md:px-0">
            <div className="px-5 pb-5">
                <h2 className="mb-8 text-4xl font-bold">FAQs</h2>
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
                <div className="flex max-w-[45rem] flex-col items-stretch justify-items-center md:w-[54rem] lg:max-w-[54rem]">
                    <button
                        className="flex items-center justify-between pt-6 md:items-start"
                        onClick={() => toggleRow(5)}
                    >
                        <h3
                            className={`text-left text-[1.2rem] leading-[1.5] tracking-[0.00625em] md:text-center md:text-[1.4rem] md:font-semibold md:leading-[1.1] ${poppins.className}`}
                        >
                            I love Amisplace! Can I help out?
                        </h3>
                        <div className="ml-4 flex-none">
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
                            <p className="mt-6 text-left font-light">
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
                            <div className="mt-5 h-px rounded-[100vw] bg-gray-200"></div>
                        </motion.div>
                    )}
                    {!expandedRows.includes(5) && (
                        <div className="mt-5 h-px rounded-[100vw] bg-gray-200"></div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FAQs;
