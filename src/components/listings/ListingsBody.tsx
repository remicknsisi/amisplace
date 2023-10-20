import React from "react";

import ListingCard from "../ListingCard";

import MOCK_LISTINGS from "../../../public/test_data/listings.json";

const ListingsBody = () => {
    const { listings } = MOCK_LISTINGS;
    return (
        <div className="px-10">
            <div className="w-full max-w-[80rem] pt-8 mx-auto">
                <div className="flex flex-col mx-auto max-w-[70rem]">
                    <div className="mb-12">
                        <div className="flex justify-between items-end mx-auto">
                            <h4>Available</h4>
                            <div className="flex pb-2">
                                <span className="text-green">{listings.length}&nbsp;</span>results
                            </div>
                        </div>
                        <hr className="mt-2"/>
                    </div>
                    <div className="grid grid-cols-[1fr,1fr,1fr] justify-center items-stretch gap-y-16 gap-x-10">
                        {listings.map((listing, index) => (
                            <ListingCard
                                key={`${listing.location}-${listing.host}-${index}`}
                                location={listing.location}
                                description={listing.description}
                                area={listing.area}
                                imgPath={listing.imgSrc}
                                imgAlt={`Picture of ${listing.description}`}
                                price={listing.price}
                                duration={listing.duration}
                                host={listing.host}
                                available_dates={listing.available_dates}
                                link={listing.details_link}
                                isListingsPageComponent
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingsBody;
