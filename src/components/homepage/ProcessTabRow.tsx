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
    isFirstElement,
}: ProcessTabRowProps) => {
    return (
        <div className={isFirstElement ? "mt-8" : "mt-2"}>
            <div className="mb-4 flex flex-col items-center md:flex-row md:items-start">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-lightGreen-50 md:mr-8">
                    <img src={imgSrc} alt={`${imgIcon} icon`} />
                </div>
                <div className="mt-4 text-center md:mt-0 md:text-left">
                    <h3 className="mb-2 text-xl font-bold md:text-[1.15rem] lg:text-xl">
                        {header}
                    </h3>
                    <p className="font-light">{subtitle}</p>
                </div>
            </div>
        </div>
    );
};

export default ProcessTabRow;
