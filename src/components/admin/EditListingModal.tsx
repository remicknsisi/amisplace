import React, { useState } from "react";

interface EditListingModalProps {
    onClose: () => void; 
}

const EditListingModal = ({ onClose, availableDates, price, listing }: EditListingModalProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [newDates, setNewDates] = useState(availableDates);
    const [newPrice, setNewPrice] = useState(price);

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        //handle loading logic in tandem with API call

        const formData = new FormData(event.target as HTMLFormElement);

        // console.log(formData.get("available_dates_string"));
        // const response = await fetch("/listings", {
        // how does one pinpoint the listing to patch without IDs
        //     method: "PATCH",
        //     body: formData,
        // });
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
            <div className="bg-black bg-opacity-50 absolute inset-0"></div>
            {isLoading ? 
                <div className="bg-white rounded-md p-6 max-w-md z-10">
                    <p>Submitting changes...</p>
                </div>
            : 
            <div className="bg-white rounded-md p-6 max-w-md relative z-10">
               <div className="flex items-center justify-between">
                    <p className="text-center text-lg font-bold">Edit Listing</p>
                    <button
                    className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md mb-2"
                    onClick={onClose}>
                    X
                    </button>
                </div>
                <form onSubmit={onSubmit}>
                    <label className="mb-4 block font-bold opacity-70">Available Dates: </label>
                    <input 
                        type="text" 
                        value={newDates}
                        name="available_dates_string"
                        className="text-gray-500 border border-gray-300 rounded-md px-2 py-1 focus:outline-none mb-2 w-auto overflow-auto"
                        onChange={(e) => setNewDates(e.target.value)}
                    />
                    <br/><br/>
                    <label className="mb-4 block font-bold opacity-70">Price: </label>
                    <input 
                        type="number" 
                        value={newPrice}
                        name="price"
                        className="text-gray-500 border border-gray-300 rounded-md px-2 py-1 focus:outline-none mb-2 w-auto overflow-auto" 
                        onChange={(e) => setNewPrice(e.target.value)}
                    />
                    <br/><br/>
                    <button className="cursor-pointer rounded-md bg-green px-[2.625rem] py-3 text-center text-xl font-bold text-white" type="submit">Submit Changes</button>
                </form>
            </div>}
        </div>
    );
};

export default EditListingModal;