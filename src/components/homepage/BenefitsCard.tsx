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
            className="h-full max-w-[35rem] rounded-2xl bg-lightGreen-50 px-[2.5rem] py-[2em]
                            md:grid md:max-w-[40rem] md:grid-cols-[.75fr,1.25fr] md:grid-rows-[auto] md:items-center
                            lg:block lg:min-h-[27rem] lg:w-full lg:px-[1.5rem] lg:py-14"
        >
            <div className="mb-10 flex justify-center md:mb-0 lg:mb-10">
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
                <p className="text-[1.125rem] font-light lg:text-xl">
                    {cardSubtitle}
                </p>
            </div>
        </div>
    );
};

export default BenefitsCard;
