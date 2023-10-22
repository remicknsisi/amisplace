import React from "react";

interface ListingCardProps {
    imgPath: string;
    imgAlt: string;
    location: string;
    description: string;
    area: string;
    price: string;
    duration: string;
    host?: string;
    available_dates?: string;
    link?: string;
    isListingsPageComponent?: boolean;
}

const ListingCard = ({
    imgPath,
    imgAlt,
    location,
    description,
    area,
    price,
    duration,
    host,
    available_dates: availableDates,
    link,
    isListingsPageComponent = false,
}: ListingCardProps) => {
    return (
        <a
            className={`flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-2xl shadow-[0_4px_18px_rgba(47,48,48,0.1)] ${
                isListingsPageComponent &&
                "transition-all hover:-translate-y-2 hover:shadow-[0_4px_18px_rgba(47,48,48,0.13)]"
            }`}
            href={link}
            target="_blank"
            rel="noreferrer"
        >
            <div className="relative">
                <img
                    src={imgPath || "/assets/listing-generic-photo.jpeg"}
                    alt={imgAlt}
                    className="h-[60vw] max-h-[21rem] w-full object-cover md:h-[28vw] md:max-h-none lg:h-[13rem]"
                />
                <div className="absolute bottom-0 rounded-tr-2xl bg-white px-6 pt-[0.375rem] font-bold sm:text-xl md:text-lg lg:text-xl">
                    {location}
                </div>
            </div>
            <div className="px-6 pt-6">
                <h3
                    className={`mb-6 text-sm font-light opacity-80 ${
                        !isListingsPageComponent && "min-h-[3rem]"
                    }`}
                >
                    {description}
                </h3>
                <div
                    className={`${
                        isListingsPageComponent ? "mb-2" : "mb-6"
                    } flex items-center text-sm font-light`}
                >
                    <div className="mr-4">
                        <div className="flex h-[1.5rem] w-[1.5rem] items-center justify-center rounded-full bg-lightGreen-50">
                            <img
                                src="/assets/logos/location-pin.svg"
                                alt="Listing card location pin icon"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="mr-1">
                            <div>Area:&nbsp;</div>
                        </div>
                        <div>{area}</div>
                    </div>
                </div>
                {host && (
                    <div className="mb-2 flex items-center text-sm font-light">
                        <div className="mr-4">
                            <div className="flex h-[1.5rem] w-[1.5rem] items-center justify-center rounded-full bg-lightGreen-50">
                                <img
                                    src="/assets/logos/person.svg"
                                    alt="Listing card location personn icon"
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="mr-1">
                                <div>Host:&nbsp;</div>
                            </div>
                            <div>{host}</div>
                        </div>
                    </div>
                )}
                {availableDates && (
                    <div className="mb-6 flex items-center text-sm font-light">
                        <div className="mr-4">
                            <div className="flex h-[1.5rem] w-[1.5rem] items-center justify-center rounded-full bg-lightGreen-50">
                                <img
                                    src="/assets/logos/calendar.svg"
                                    alt="Listing card location calendar icon"
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="mr-1">
                                <div>Available dates:&nbsp;</div>
                            </div>
                            <div>{availableDates}</div>
                        </div>
                    </div>
                )}
            </div>
            <div className="flex justify-between border-t px-6 pb-4 pt-3">
                <h4 className="flex items-end">
                    <span className="mr-[.2rem] text-2xl font-bold">
                        ${price}
                    </span>
                    <span className="mb-1 text-sm font-bold">/{duration}</span>
                </h4>
                {isListingsPageComponent && (
                    <div className="flex items-center text-sm font-bold text-green">
                        More details
                        <div className="ml-1 hover:translate-x-2">
                            <img
                                src="/assets/logos/arrow-right.svg"
                                alt="Listing card more details icon"
                            />
                        </div>
                    </div>
                )}
            </div>
        </a>
    );
};

export default ListingCard;
