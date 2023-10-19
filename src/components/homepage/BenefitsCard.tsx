import React from "react";

import { poppins } from "../../helpers/loadFont";

interface BenefitsCardProps {
    imgPath: string;
    imgAlt: string;
    cardTitle: string;
    cardSubtitle: string;
}

const BenefitsCard = ({
    imgPath,
    imgAlt,
    cardTitle,
    cardSubtitle,
}: BenefitsCardProps) => {
    return (
        <div
            className="bg-lightGreen-50 rounded-2xl py-[2em] px-[2.5rem] h-full max-w-[35rem]
                            md:grid md:grid-cols-[.75fr,1.25fr] md:grid-rows-[auto] md:items-center md:max-w-[40rem]
                            lg:block lg:py-14 lg:px-[1.5rem] lg:w-full lg:min-h-[27rem]"
        >
            <div className="mb-10 md:mb-0 lg:mb-10 flex justify-center">
                <img
                    src={imgPath}
                    alt={imgAlt}
                    loading="lazy"
                    className="h-[7.375rem]"
                />
            </div>
            <div>
                <h3 className={`mb-4 text-[1.25rem] ${poppins.className}`}>
                    {cardTitle}
                </h3>
                <p className="text-[1.125rem] lg:text-xl font-light">
                    {cardSubtitle}
                </p>
            </div>
        </div>
    );
};

export default BenefitsCard;
