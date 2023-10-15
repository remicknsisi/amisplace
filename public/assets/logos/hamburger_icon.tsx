import React from "react";

const HamburgerIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 100 80" width="24" height="24" {...props}>
        <rect width="100" height="10" rx="10"></rect>
        <rect y="30" width="100" height="10" rx="10"></rect>
        <rect y="60" width="100" height="10" rx="10"></rect>
    </svg>
);

export default HamburgerIcon;
