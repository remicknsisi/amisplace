import { Database } from "@/lib/database.types";
import React, { FormEvent, useState } from "react";

type Listing = Database["public"]["Tables"]["listings"]["Row"];

interface EditListingModalProps {
    onClose: () => void;
    listing: Listing | null;
}

const EditListingModal = ({ onClose, listing }: EditListingModalProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        // setIsLoading(true);

        const response = await fetch(`/listings/${listing?.id}`, {
            method: "PATCH",
            body: formData,
        });

        const data = await response.json();
        if (data?.success) {
            setIsLoading(false);
            location.reload();
        } else {
            setErrorMessage("Could not update listing");
        }
    }

    return (
        <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center">
            <div className="absolute inset-0 bg-black/50"></div>
            {isLoading ? (
                <div className="z-10 rounded-md bg-white p-5">
                    <p>Submitting changes...</p>
                </div>
            ) : (
                <div className="z-10 rounded-md bg-white p-5">
                    <div className="flex items-center justify-between">
                        <p className="text-center text-lg font-bold">
                            Edit Listing
                        </p>
                        <button
                            className="rounded-md bg-gray-200 px-4 py-2 hover:bg-gray-300"
                            onClick={onClose}
                        >
                            X
                        </button>
                    </div>
                    <form onSubmit={onSubmit}>
                        <label className="mb-4 block font-bold text-slate-500">
                            Available Dates:{" "}
                        </label>
                        <input
                            type="text"
                            defaultValue={listing?.available_dates_string ?? ""}
                            name="available_dates_string"
                            className="rounded-md border border-gray-300 px-2 py-1 text-gray-500"
                        />
                        <br />
                        <br />
                        <label className="mb-4 block font-bold text-slate-500">
                            Price:{" "}
                        </label>
                        <input
                            type="number"
                            defaultValue={listing?.price ?? 0}
                            name="price"
                            className="rounded-md border border-gray-300 px-2 py-1 text-gray-500"
                        />
                        <br />
                        <br />
                        <button
                            className="cursor-pointer rounded-md bg-green px-[2.625rem] py-3 text-center text-xl font-bold text-white"
                            type="submit"
                        >
                            Submit Changes
                        </button>
                    </form>
                    <p className="-mt-4 mb-6 text-sm text-red-500">
                        {errorMessage}
                    </p>
                </div>
            )}
        </div>
    );
};

export default EditListingModal;
