import React, { useState } from "react";
import { motion } from "framer-motion";

import ListingCard from "../ListingCard";

import MOCK_LISTINGS from "../../../public/test_data/listings.json";

type FilterType = "available" | "all";

const ListingsBody = () => {
    const FILTER_MAP = {
        available: "Available",
        all: "All member homes",
    };
    const { listings } = MOCK_LISTINGS;

    const [filter, setFilter] = useState<FilterType>("available");
    const [isActive, setIsActive] = useState(false);

    const filteredListings = listings.filter((listing) => {
        if (filter === "available") {
            return listing.isAvailable;
        }
        return true;
    });

    const handleOptionClick = (optionText: FilterType) => {
        setFilter(optionText);
        setIsActive(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent, optionText: FilterType) => {
        if (e.key === "Enter") {
            setFilter(optionText);
            setIsActive(false);
        }
    };

    return (
        <div className="px-10">
            <div className="mx-auto w-full max-w-[80rem] pt-8">
                <div className="mx-auto flex max-w-[70rem] flex-col">
                    <div className="mb-12">
                        <div className="mx-auto flex items-end justify-between">
                            <div
                                className={`custom-select relative ${
                                    isActive ? "active" : ""
                                }`}
                            >
                                <button
                                    className="select-button flex items-center justify-between py-3 pr-4"
                                    role="combobox"
                                    aria-expanded="false"
                                    aria-controls="select-dropdown"
                                    onClick={() => setIsActive(!isActive)}
                                >
                                    <span className="text-left">
                                        {FILTER_MAP[filter]}
                                    </span>
                                    <span
                                        className={`arrow ml-4 transform border-l-[5px] border-r-[5px] border-t-[6px] border-transparent border-t-green transition-transform duration-300 ease-in-out ${
                                            isActive && "rotate-180"
                                        }`}
                                    />
                                </button>
                                <ul
                                    className={`transform transition-all duration-500 ${
                                        isActive
                                            ? "visible scale-y-100 opacity-100"
                                            : "invisible scale-y-0 opacity-0"
                                    } absolute z-10 mt-4 list-none whitespace-nowrap rounded-md bg-white p-4 shadow-[0_4px_18px_rgba(47,48,48,0.1)]`}
                                    role="listbox"
                                    id="select-dropdown"
                                >
                                    <li
                                        tabIndex={0}
                                        role="option"
                                        aria-selected={filter === "available"}
                                        onKeyDown={(e) =>
                                            handleKeyDown(e, "available")
                                        }
                                        onClick={() =>
                                            handleOptionClick("available")
                                        }
                                    >
                                        <label
                                            htmlFor="available"
                                            className={`flex cursor-pointer items-center gap-4 px-2 py-3 ${
                                                filter === "available" &&
                                                `text-green`
                                            } focus:bg-green-100 focus:outline-green`}
                                        >
                                            Available
                                        </label>
                                        <input
                                            type="radio"
                                            id="available"
                                            name="available"
                                            className="absolute left-0 opacity-0"
                                        />
                                    </li>
                                    <li
                                        tabIndex={0}
                                        role="option"
                                        aria-selected={filter === "all"}
                                        onKeyDown={(e) =>
                                            handleKeyDown(e, "all")
                                        }
                                        onClick={() => handleOptionClick("all")}
                                    >
                                        <label
                                            htmlFor="all"
                                            className={`flex cursor-pointer items-center gap-4 px-2 py-3 ${
                                                filter === "all" && `text-green`
                                            }`}
                                        >
                                            All member homes
                                        </label>
                                        <input
                                            type="radio"
                                            id="all"
                                            name="all"
                                            className="absolute left-0 opacity-0"
                                        />
                                    </li>
                                </ul>
                            </div>
                            <div className="flex pb-2">
                                <span className="text-green">
                                    {filteredListings.length}&nbsp;
                                </span>
                                results
                            </div>
                        </div>
                        <hr className="mt-2" />
                    </div>
                    <div className="mx-auto grid max-w-[34rem] grid-cols-[1fr] items-stretch justify-center gap-x-10 gap-y-16 md:max-w-none md:grid-cols-[1fr,1fr] lg:grid-cols-[1fr,1fr,1fr]">
                        {filteredListings.map((listing, index) => (
                            <motion.div
                                className="h-full"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    ease: "easeInOut",
                                    duration: 0.75,
                                    delay: 0.25 * (index % 3),
                                }}
                                key={`${listing.location}-${listing.host}-${index}`}
                            >
                                <ListingCard
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
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingsBody;
