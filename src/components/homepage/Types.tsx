import React from "react";

import { poppins } from "../../helpers/loadFont";

const Types = () => {
    return (
        <div className="px-5 md:px-10">
            <div className="mx-auto w-full max-w-[80rem] py-14">
                <div className="flex flex-col text-center">
                    <div className="mx-auto mb-12 max-w-[47rem] items-center justify-center">
                        <h2 className={`text-[2.5rem] ${poppins.className}`}>
                            You can become
                        </h2>
                    </div>
                    <div className="gri-col-1fr mx-auto grid auto-cols-[1fr] items-center justify-center gap-10 md:max-w-[70rem] md:grid-cols-[1fr,1fr,1fr]">
                        <div>
                            <h3
                                className={`mb-8 text-[2rem] ${poppins.className} text-green`}
                            >
                                A host
                            </h3>
                            <p className="text-xl font-light">
                                Host a trusted guest and offset housing costs
                                while you’re away.
                            </p>
                        </div>
                        <div>
                            <h3
                                className={`mb-8 text-[2rem] ${poppins.className} text-green`}
                            >
                                A guest
                            </h3>
                            <p className="text-xl font-light">
                                Find a nice place to stay without the worry of
                                unreasonable pricing.
                            </p>
                        </div>
                        <div>
                            <h3
                                className={`mb-8 text-[2rem] ${poppins.className} text-green`}
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
