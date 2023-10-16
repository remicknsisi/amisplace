import React from "react";

interface ProcessTabRowProps {
    header: string;
    subtitle: string;
    imgSrc: string;
    imgIcon: string;
    isFirstElement: boolean;
}

const ProcessTabRow = ({
    header,
    subtitle,
    imgSrc,
    imgIcon,
    isFirstElement = false,
}: ProcessTabRowProps) => {
    return (
        <div className={isFirstElement ? "mt-8" : "mt-2"}>
            <div className="flex flex-col items-center md:items-start md:flex-row mb-4">
                <div className="flex flex-none rounded-full bg-lightGreen-50 justify-center items-center w-11 h-11 md:mr-8">
                    <img src={imgSrc} alt={`${imgIcon} icon`} />
                </div>
                <div className="text-center mt-4 md:mt-0 md:text-left">
                    <h3 className="mb-2 text-xl md:text-lg font-bold">{header}</h3>
                    <p>{subtitle}</p>
                </div>
            </div>
        </div>
    );
};

export default ProcessTabRow;
