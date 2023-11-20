"use client";

import React, { useState } from "react";
import { Database } from "@/lib/database.types";
import EditListingModal from "./EditListingModal";

interface ListingsTableProps {
    listings: Database["public"]["Tables"]["listings"]["Row"][];
}

const ListingsTable = ({ listings }: ListingsTableProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedListing, setSelectedListing] = useState(null);

    const toggleModal = (listing) => {
        setSelectedListing(listing);
        setIsModalOpen(!isModalOpen);
    };

    const modal = isModalOpen && (
        <EditListingModal
          availableDates={selectedListing.available_dates_string || ""}
          price={selectedListing.price || 0}
          listing={selectedListing}
          onClose={toggleModal}
        />
      );

    return (
        <div className="px-5 md:px-8 lg:px-16">
            <div className="mx-auto w-full max-w-[80rem]">
                <div className="grid-cols-1fr mb-28 grid items-center justify-center gap-x-10 gap-y-12 pt-16 lg:grid-cols-[1fr,1fr]">
                    <div className="text-center mb-6 lg:mb-0">
                        <h1 className="mb-6 text-[1.5rem] md:text-2xl lg:text-3xl font-bold text-center">
                            Listings Editor
                        </h1>
                        <div className="mx-auto grid max-w-[34rem] grid-cols-[1fr] sm:max-w-none sm:grid-cols-[1fr,1fr] md:grid-cols-[1fr,1fr] lg:grid-cols-[1fr,1fr,1fr]">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-teal-400">
                                        <th className="p-3 text-left">Host</th>
                                        <th className="p-3 text-left">Location</th>
                                        <th className="p-3 text-left">Price</th>
                                        <th className="p-3 text-left">Area</th>
                                        <th className="p-3 text-left">More Details Link</th>
                                        <th className="p-3 text-left">Edit</th>
                                    </tr>
                                </thead>
                                <tbody className="flex-1 sm:flex-none">
                                    {listings.map((listing) => (
                                        <tr key={listing.id} className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                                            <td className="border-grey-light border p-3">{listing.host || ""}</td>
                                            <td className="border-grey-light border p-3">{listing.location || ""}</td>
                                            <td className="border-grey-light border p-3">${listing.price || 0}</td>
                                            <td className="border-grey-light border p-3">{listing.area || ""}</td>
                                            <td className="border-grey-light border p-3">{listing.more_details_link || ""}</td>
                                            <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer" onClick={() => toggleModal(listing)}>✎</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {isModalOpen ? modal : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingsTable;