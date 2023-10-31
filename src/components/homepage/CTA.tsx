import React from "react";

import TravelButton from "../common/TravelButton";

const CTA = () => {
    return (
        <div className="text-center">
            <div className="mx-auto flex w-full max-w-[80rem] flex-col items-center px-10 py-14">
                <div className="max-w-[42rem]">
                    <h2 className="mb-8 text-4xl font-bold">Interested?</h2>
                    <p className="text-lg font-light">
                        We vet everyone who joins. We&apos;re so excited
                        you&apos;re interested in being a part of our community!
                    </p>
                    <p className="mt-8 text-lg font-light">
                        Travel cozier. Travel cheaper. Travel better.
                    </p>
                </div>
            </div>
            <TravelButton />
        </div>
    );
};

export default CTA;
