import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex min-h-screen flex-col">
            <div className="mt-[4.5rem] flex flex-grow justify-center md:mt-0">
                <div className="mt-4 max-w-[41rem] px-5 pb-[4.5rem] sm:mt-28 md:px-8">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;
