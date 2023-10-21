import React, { ReactElement } from "react";

import { poppins } from "../../helpers/loadFont";

interface FAQAccordionRowProps {
    question: string;
    answer?: string;
    answerRender?: () => ReactElement;
    isOpen: boolean;
    onToggle: () => void;
}

const FAQAccordionRow = ({
    question,
    answer,
    answerRender,
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
                    className={`text-left text-[1.2rem] leading-[1.5] tracking-[0.00625em] md:text-center md:text-[1.4rem] md:font-semibold md:leading-[1.1] lg:text-2xl ${poppins.className}`}
                >
                    {question}
                </h3>
                <div className="ml-4 flex-none self-start">
                    <img
                        src="/assets/logos/plus.svg"
                        alt="Plus icon"
                        className={`easy-linear absolute transition-[opacity] duration-500 ${
                            isOpen ? "opacity-0" : "opacity-100"
                        }`}
                    />
                    <img
                        src="/assets/logos/minus.svg"
                        alt="Minus icon"
                        className={`easy-linear transition-opacity duration-500 ${
                            isOpen ? "opacity-100" : "opacity-0"
                        }`}
                    />
                </div>
            </button>
            <div
                className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
            >
                <div className="overflow-hidden">
                    <div
                        className={`mt-6 overflow-hidden text-left font-light md:text-lg`}
                    >
                        {answerRender ? answerRender() : answer}
                    </div>
                </div>
            </div>
            <div className="mt-6 h-px bg-gray-200"></div>
        </div>
    );
};

export default FAQAccordionRow;
