import React from "react";

const TravelButton = () => {
    return (
        <div className="transition duration-200 ease-in-out hover:scale-105">
            <a
                href="/join"
                className="rounded-lg bg-green px-11 py-3 font-bold text-white hover:bg-darkGreen md:tracking-wide"
            >
                Travel with Amisplace
            </a>
        </div>
    );
};

export default TravelButton;
