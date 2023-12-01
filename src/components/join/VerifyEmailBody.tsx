"use client";

import React, { useEffect, useRef, useState } from "react";

import { poppins } from "../../helpers/loadFont";

const VerifyEmailBody = () => {
    const codeLength = 6;
    const [code, setCode] = useState(Array(codeLength).fill(""));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    if (inputRefs.current.length !== codeLength) {
        inputRefs.current = Array(codeLength).fill(null);
    }

    const handleInput = (value: string, index: number) => {
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        // Move to next input if value is entered
        if (value && index < codeLength - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    useEffect(() => {
        inputRefs.current[0]?.focus();
    }, []);

    return (
        <div className="mt-[4.5rem] flex justify-center md:mt-0">
            <div className="flex max-w-[41rem] justify-start">
                <div className="px-5 md:px-8">
                    <div className="mx-auto w-full max-w-[80rem] pb-[4.5rem]">
                        <div className="flex flex-col justify-center pt-4 text-left md:pt-[7rem]">
                            <h1
                                className={`${poppins.className} text-[2rem] font-bold md:text-[2.5rem]`}
                            >
                                Verify your email
                            </h1>
                            <p className="mb-4 mt-4 text-xl font-light opacity-70">
                                Please enter the 6-character code we sent
                                to&nbsp;
                                <span className="font-bold">
                                    emily@amisplace.com
                                </span>
                                .
                            </p>
                            <h4 className="mt-8 text-lg">Enter code</h4>
                            <div className="mb-8 mt-4 flex justify-center space-x-2 sm:space-x-4">
                                {code.map((digit, index) => (
                                    <input
                                        key={index}
                                        ref={(el) =>
                                            (inputRefs.current[index] = el)
                                        }
                                        type="text"
                                        maxLength={1}
                                        value={digit}
                                        onChange={(e) =>
                                            handleInput(e.target.value, index)
                                        }
                                        onKeyDown={(e) => {
                                            if (
                                                e.key === "Backspace" &&
                                                !digit &&
                                                index > 0
                                            ) {
                                                inputRefs.current[
                                                    index - 1
                                                ]?.focus();
                                            }
                                        }}
                                        className="h-12 w-12 rounded-lg border text-center text-xl focus-visible:outline-green sm:h-16 sm:w-16"
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="col-span-2 row-span-1 font-light">
                            Haven&apos;t received an email? Check your spam
                            folder or&nbsp;
                            <a href="/join" className="text-green underline">
                                apply with a different email address.
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerifyEmailBody;
