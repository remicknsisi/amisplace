import React from "react";

import { poppins } from "../../helpers/loadFont";

const Types = () => {
    return (
        <div className="px-5 md:px-10">
            <div className="max-w-[80rem] w-full mx-auto py-14">
                <div className="flex flex-col text-center">
                    <div className="flex flex-col mx-auto mb-16 items-center justify-center max-w-[47rem]">
                        <h2
                            className={`text-[2.5rem] mb-8 ${poppins.className}`}
                        >
                            You can become
                        </h2>
                    </div>
                    <div className="grid gri-col-1fr md:max-w-[70rem] md:grid-cols-[1fr,1fr,1fr] auto-cols-[1fr] justify-center items-center mx-auto gap-10">
                        <div className="flex flex-col items-center justify-center text-center">
                            <h3
                                className={`text-[2rem] mb-8 ${poppins.className} text-green`}
                            >
                                A host
                            </h3>
                            <p className="text-xl font-light">
                                Host a trusted guest and offset housing costs
                                while you’re away.
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center">
                            <h3
                                className={`text-[2rem] mb-8 ${poppins.className} text-green`}
                            >
                                A guest
                            </h3>
                            <p className="text-xl font-light">
                                Find a nice place to stay without the worry of
                                unreasonable pricing.
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center">
                            <h3
                                className={`text-[2rem] mb-8 ${poppins.className} text-green`}
                            >
                                A connection
                            </h3>
                            <p className="text-xl font-light">
                                Connect mutual friends, even if you don’t have
                                any upcoming travel plans.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Types;
