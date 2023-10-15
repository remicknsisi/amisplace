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
        <div className="bg-lightGreen-50 rounded-2xl py-[2em] px-[2.5rem] max-w-[35rem] md:py-14 md:px-[2.5rem] md:w-full h-full md:min-h-[27rem]">
            <div className="mb-10 flex justify-center">
                <img
                    src={imgPath}
                    alt={imgAlt}
                    loading="lazy"
                    className="h-[7.375rem]"
                />
            </div>
            <h3 className={`mb-4 text-[1.25rem] ${poppins.className}`}>
                {cardTitle}
            </h3>
            <p className="text-[1.125rem] font-light">{cardSubtitle}</p>
        </div>
    );
};

export default BenefitsCard;
