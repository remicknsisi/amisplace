import React from "react";

interface RoomSelectionTileRowProps {
    onSelect: (selection: string) => void;
    selectedValue: string;
}

const RoomSelectionTileRow = ({
    onSelect,
    selectedValue,
}: RoomSelectionTileRowProps) => {
    const buttonClasses =
        "h-[48px] w-[48px] rounded-lg border border-solid border-[#595959] p-3";
    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const value = (e.target as HTMLButtonElement).value;
        onSelect(value);
    };
    return (
        <div className="flex justify-evenly">
            <button
                className={`${buttonClasses} ${
                    selectedValue === "1"
                        ? "border-2 bg-[#EAF2EE]"
                        : ""
                }`}
                onClick={handleButtonClick}
                value="1"
            >
                1
            </button>
            <button
                className={`${buttonClasses} ${
                    selectedValue === "2"
                        ? "border-2 bg-[#EAF2EE]"
                        : ""
                }`}
                onClick={handleButtonClick}
                value="2"
            >
                2
            </button>
            <button
                className={`${buttonClasses} ${
                    selectedValue === "3"
                        ? "border-2 bg-[#EAF2EE]"
                        : ""
                }`}
                onClick={handleButtonClick}
                value="3"
            >
                3
            </button>
            <button
                className={`${buttonClasses} ${
                    selectedValue === "4"
                        ? "border-2 bg-[#EAF2EE]"
                        : ""
                }`}
                onClick={handleButtonClick}
                value="4"
            >
                4
            </button>
            <button
                className={`${buttonClasses} ${
                    selectedValue === "5"
                        ? "border-2 bg-[#EAF2EE]"
                        : ""
                }`}
                onClick={handleButtonClick}
                value="5"
            >
                5
            </button>
            <button
                className={`${buttonClasses} ${
                    selectedValue === "6+"
                        ? "border-2 bg-[#EAF2EE]"
                        : ""
                }`}
                onClick={handleButtonClick}
                value="6+"
            >
                6+
            </button>
        </div>
    );
};

export default RoomSelectionTileRow;
