"use client";

import React, { useState } from "react";
import { Database } from "@/lib/database.types";
import EditListingModal from "./EditListingModal";

type Listing = Database["public"]["Tables"]["listings"]["Row"];

interface ListingsTableProps {
    listings: Database["public"]["Tables"]["listings"]["Row"][];
}

const ListingsTable = ({ listings }: ListingsTableProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedListing, setSelectedListing] = useState<Listing | null>(null);

    const toggleModal = (listing: Listing) => {
        setSelectedListing(listing);
        setIsModalOpen(true);
    };

    const modal = isModalOpen && (
        <EditListingModal
            listing={selectedListing}
            onClose={() => setIsModalOpen(false)}
        />
    );

    return (
        <div className="px-5 md:px-8 lg:px-16">
            <div className="mx-auto w-full max-w-[80rem]">
                <div className="grid-cols-1fr mb-28 grid items-center justify-center gap-x-10 gap-y-12 pt-16 lg:grid-cols-[1fr,1fr]">
                    <div className="mb-6 text-center lg:mb-0">
                        <h1 className="mb-6 text-center text-[1.5rem] font-bold md:text-2xl lg:text-3xl">
                            Listings Editor
                        </h1>
                        <div className="mx-auto grid max-w-[34rem] grid-cols-[1fr] sm:max-w-none sm:grid-cols-[1fr,1fr] md:grid-cols-[1fr,1fr] lg:grid-cols-[1fr,1fr,1fr]">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-teal-400">
                                        <th className="p-3 text-left">Host</th>
                                        <th className="p-3 text-left">
                                            Location
                                        </th>
                                        <th className="p-3 text-left">Price</th>
                                        <th className="p-3 text-left">Area</th>
                                        <th className="p-3 text-left">
                                            More Details Link
                                        </th>
                                        <th className="p-3 text-left">Edit</th>
                                    </tr>
                                </thead>
                                <tbody className="flex-1 sm:flex-none">
                                    {listings.map((listing) => (
                                        <tr
                                            key={listing.id}
                                            className="flex-no wrap mb-2 flex flex-col sm:mb-0 sm:table-row"
                                        >
                                            <td className="border-grey-light border p-3">
                                                {listing.host || ""}
                                            </td>
                                            <td className="border-grey-light border p-3">
                                                {listing.location || ""}
                                            </td>
                                            <td className="border-grey-light border p-3">
                                                ${listing.price || 0}
                                            </td>
                                            <td className="border-grey-light border p-3">
                                                {listing.area || ""}
                                            </td>
                                            <td className="border-grey-light border p-3">
                                                {listing.more_details_link ||
                                                    ""}
                                            </td>
                                            <td
                                                className="border-grey-light cursor-pointer border p-3 text-red-400 hover:bg-gray-100 hover:font-medium hover:text-red-600"
                                                onClick={() => toggleModal(listing)}
                                            >
                                            </td>
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
