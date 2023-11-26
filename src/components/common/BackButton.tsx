import React from "react";

interface BackButtonProps {
    onClick: () => void;
}

const BackButton = ({ onClick }: BackButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="flex items-center gap-2 text-[#2F3030]/[.8]"
        >
            <img src="/assets/logos/chevron_left.svg" alt="Back button" />
            Back
        </button>
    );
};

export default BackButton;
