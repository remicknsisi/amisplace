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
        <div className="flex h-full rounded-2xl flex-col justify-between overflow-hidden shadow-[0_4px_18px_rgba(47,48,48,0.1)]">
            <div className="listing-container">
                <img src={imgPath} alt={imgAlt} className="w-full h-[250px] object-cover" />
                <div className="image-caption bg-white rounded-tr-2xl font-bold pt-[0.375rem] px-6 sm:text-xl md:text-lg lg:text-xl">
                    {location}
                </div>
            </div>
            <div className="px-6 pt-6">
                <h3 className="font-light mb-6 text-sm opacity-80 min-h-[3rem]">
                    {description}
                </h3>
                <p className="flex items-center mb-6 text-sm font-light">
                    <span className="location-icon" />
                    Area: {area}
                </p>
            </div>
            <div className="flex justify-between border-t pt-3 pb-4 px-6">
                <h4 className="flex items-end">
                    <span className="font-bold text-2xl mr-[.2rem]">
                        ${price}
                    </span>
                    <span className="text-sm font-bold mb-1">/{duration}</span>
                </h4>
            </div>
        </div>
    );
};

export default ListingCard;
