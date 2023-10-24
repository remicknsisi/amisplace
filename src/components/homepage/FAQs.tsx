"use client";

import React from "react";

import FAQAccordionRow from "./FAQAccordionRow";

import data from "../../../public/text/FAQs.json";

const FAQs = () => {
    const { faqs } = data;
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
                    />
                ))}
                <FAQAccordionRow
                    key={5}
                    question={"I love Amisplace! Can I help out?"}
                    answerRender={() => (
                        <p className="mt-6 text-left font-light">
                            Yes, please send a message to{" "}
                            <a
                                className="text-green"
                                href="mailto:amy@amisplace.com?subject=General Queries"
                            >
                                amy@amisplace.com
                            </a>
                            . We&apos;d love to talk to you and figure out how
                            you can help.
                        </p>
                    )}
                />
            </div>
        </div>
    );
};

export default FAQs;
