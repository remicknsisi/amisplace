import React from "react";

interface ListingCardProps {
    imgPath: string;
    imgAlt: string;
    location: string;
    description: string;
    area: string;
    price: string;
    duration: string;
}

const ListingCard = ({
    imgPath,
    imgAlt,
    location,
    description,
    area,
    price,
    duration,
}: ListingCardProps) => {
    return (
        <div className="flex h-full flex-col justify-between overflow-hidden rounded-2xl shadow-[0_4px_18px_rgba(47,48,48,0.1)]">
            <div className="listing-container">
                <img
                    src={imgPath}
                    alt={imgAlt}
                    className="h-[250px] w-full object-cover"
                />
                <div className="image-caption rounded-tr-2xl bg-white px-6 pt-[0.375rem] font-bold sm:text-xl md:text-lg lg:text-xl">
                    {location}
                </div>
            </div>
            <div className="px-6 pt-6">
                <h3 className="mb-6 min-h-[3rem] text-sm font-light opacity-80">
                    {description}
                </h3>
                <p className="mb-6 flex items-center text-sm font-light">
                    <span className="location-icon" />
                    Area: {area}
                </p>
            </div>
            <div className="flex justify-between border-t px-6 pb-4 pt-3">
                <h4 className="flex items-end">
                    <span className="mr-[.2rem] text-2xl font-bold">
                        ${price}
                    </span>
                    <span className="mb-1 text-sm font-bold">/{duration}</span>
                </h4>
            </div>
        </div>
    );
};

export default ListingCard;
