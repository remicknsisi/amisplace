import React from "react";

const CTA = () => {
    return (
        <div className="flex flex-col items-center text-center">
            <div className="flex flex-col px-10 py-14 max-w-[80rem] w-full mx-auto">
                <div className="max-w-[42rem]">
                    <h2 className="font-bold text-4xl mb-8">Interested?</h2>
                    <p className="text-lg font-light">
                        We vet everyone who joins. We&apos;re so excited
                        you&apos;re interested in being a part of our community!
                    </p>
                    <p className="text-lg font-light mt-8">
                        Travel cozier. Travel cheaper. Travel better.
                    </p>
                </div>
            </div>
            <div className="hover:scale-105 transition ease-in-out duration-200">
                <a
                    href="/join"
                    className="bg-green text-white rounded-lg py-3 px-11 tracking-wide font-bold hover:bg-darkGreen"
                >
                    Travel with Amisplace
                </a>
            </div>
        </div>
    );
};

export default CTA;
