"use client";

import React, { useState } from "react";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const WebflowSync = () => {
    const [isSyncRunning, setIsSyncRunning] = useState(false);
    const [syncResultLogs, setSyncResultLogs] = useState<string[]>([]);
    const supabase = createClientComponentClient();

    async function syncWebflowToSupabase() {
        if (isSyncRunning) {
            return;
        }
        setIsSyncRunning(true);
        setSyncResultLogs([]);
        await syncWebflowToSupabaseWork();
        setIsSyncRunning(false);
    }

    const pushToSyncResultLogs = (newLog: string) => {
        setSyncResultLogs((prevLogs) => [...prevLogs, newLog]);
    };

    async function syncWebflowToSupabaseWork() {
        const { data: webflowResponse, error } =
            await supabase.functions.invoke("webflow_homes");
        if (error) {
            pushToSyncResultLogs(
                `Error fetching listings from webflow: ${error.message}`
            );
            return;
        }
        const webflowListingsArray = webflowResponse?.homes?.items;
        if (!webflowListingsArray) {
            pushToSyncResultLogs(
                `Malformed webflow response: ${webflowResponse}`
            );
            return;
        }
        pushToSyncResultLogs(
            `Found ${webflowListingsArray.length} listings in webflow`
        );

        // Fetch the existing listings from the database
        const { data: existingListings, error: fetchListingsError } =
            await supabase.from("listings").select("id, webflow_id");

        if (fetchListingsError) {
            pushToSyncResultLogs(
                `Error fetching lisitngs: ${fetchListingsError.message}`
            );
            return;
        }
        pushToSyncResultLogs(
            `Found ${
                existingListings ? existingListings.length : 0
            } listings in supabase`
        );

        // Create a map of webflow IDs to database IDs for quick lookups
        const webflowToDatabaseIDMap = new Map<string, string>();
        existingListings?.forEach((listing) => {
            webflowToDatabaseIDMap.set(listing.webflow_id, listing.id);
        });

        // Iterate through the webflowListingsArray and perform the sync
        for (const webflowListing of webflowListingsArray) {
            const webflowID = webflowListing.id;
            const existingDatabaseID = webflowToDatabaseIDMap.get(webflowID);
            const fieldData = webflowListing.fieldData;

            // Prepare the data for insertion or update
            const listingData = {
                webflow_id: webflowID,
                more_details_link: fieldData["more-detail-link"],
                price: fieldData.price,
                available_dates_string: fieldData["available-dates"],
                description: fieldData["property-description"],
                host: fieldData.host,
                name: fieldData.name,
                area: fieldData.area,
                location: fieldData.location,
                thumbnail_image: fieldData["thumbnail-image"].url,
                price_unit:
                    fieldData["price-unit"] === "621c490d9f4342d8ec0dba05"
                        ? "night"
                        : "month",
                available:
                    fieldData.availability === "621c490d9f434234130dba2a",
            };

            if (existingDatabaseID) {
                // If the listing exists in the database, update it
                const { error } = await supabase
                    .from("listings")
                    .update(listingData)
                    .eq("id", existingDatabaseID);

                if (!error) {
                    pushToSyncResultLogs(
                        `Updated Listing: ID ${existingDatabaseID}, Name: ${listingData.name}`
                    );
                } else {
                    pushToSyncResultLogs(
                        `Error updating listing with ID ${existingDatabaseID}: ${error.message}`
                    );
                }
            } else {
                // If the listing does not exist in the database, insert it
                const { data: newListing, error } = await supabase
                    .from("listings")
                    .insert(listingData)
                    .select()
                    .single();

                if (!error) {
                    pushToSyncResultLogs(
                        `Inserted Listing: ID ${newListing?.id}, Name: ${listingData.name}`
                    );
                } else {
                    pushToSyncResultLogs(
                        `Error inserting listing: ${error.message}`
                    );
                }
            }

            // Remove the ID from the map to keep track of what's processed
            webflowToDatabaseIDMap.delete(webflowID);
        }

        // Whatever remains in the map are listings that should be deleted
        for (const databaseID of webflowToDatabaseIDMap.values()) {
            const { error } = await supabase
                .from("listings")
                .delete()
                .eq("id", databaseID);

            if (!error) {
                pushToSyncResultLogs(`Deleted Listing: ID ${databaseID}`);
            } else {
                pushToSyncResultLogs(
                    `Error deleting listing with ID ${databaseID}: ${error.message}`
                );
            }
        }
    }

    return (
        <>
            <div className="p-4">
                <h1 className="mb-4 text-3xl font-semibold">
                    Sync Result Logs
                </h1>
                <button
                    onClick={syncWebflowToSupabase}
                    className={`mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 ${
                        isSyncRunning ? "cursor-not-allowed opacity-50" : ""
                    }`}
                    disabled={isSyncRunning}
                >
                    {isSyncRunning ? "Syncing..." : "Sync Webflow to Supabase"}
                </button>
                <div className="rounded border border-gray-300 p-4 shadow-md">
                    <ul className="list-disc pl-4">
                        {syncResultLogs.map((log, index) => (
                            <li key={index} className="text-gray-800">
                                {log}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default WebflowSync;
