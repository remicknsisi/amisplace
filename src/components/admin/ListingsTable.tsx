"use client";

import { Database } from "@/lib/database.types";
import React, { useState } from "react";

import EditListingModal from "./EditListingModal";

type Listing = Database["public"]["Tables"]["listings"]["Row"];

interface ListingsTableProps {
    listings: Database["public"]["Tables"]["listings"]["Row"][];
}

const ListingsTable = ({ listings }: ListingsTableProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedListing, setSelectedListing] = useState<Listing | null>(
        null
    );

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
        <div className="m-10">
            <h1 className="p-10 text-center text-2xl font-bold lg:text-3xl">
                Listings Editor
            </h1>
            <div className="flex justify-center">
                <table className="">
                    <thead className="border bg-slate-200">
                        <tr>
                            <th className="hidden md:table-cell">Host</th>
                            <th className="hidden md:table-cell">Location</th>
                            <th className="hidden md:table-cell">Price</th>
                            <th className="hidden md:table-cell">Area</th>
                            <th className="hidden md:table-cell">
                                More Details Link
                            </th>
                            <th className="hidden p-2 md:table-cell">Edit</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {listings.map((listing) => (
                            <tr
                                key={listing.id}
                                className="mb-2 flex flex-col border text-center sm:table-row sm:text-left"
                            >
                                <td className="border p-2">
                                    {listing.host || ""}
                                </td>
                                <td className="border p-2">
                                    {listing.location || ""}
                                </td>
                                <td className="border p-2">
                                    ${listing.price || 0}
                                </td>
                                <td className="border p-2">
                                    {listing.area || ""}
                                </td>
                                <td className="border p-2">
                                    {listing.more_details_link || ""}
                                </td>
                                <td
                                    className="hidden border p-2 text-center hover:bg-slate-100 md:table-cell"
                                    onClick={() => toggleModal(listing)}
                                >
                                    ✎
                                </td>
                                <td
                                    className="border bg-green p-2 text-center font-bold text-white md:hidden"
                                    onClick={() => toggleModal(listing)}
                                >
                                    Edit
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {isModalOpen ? modal : null}
            </div>
        </div>
    );
};

export default ListingsTable;
