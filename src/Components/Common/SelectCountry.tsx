import React from "react";
import locationIcon from "Assets/Icons/location.svg";

const SelectCountry = (): JSX.Element => {
    return <>
        <div className="flex">
            <div className="flex items-end">
                <img src={locationIcon} alt="location_pin" className="h-4"/>
            </div>
            <div className="flex flex-col">
                <div>
                    <p className="m-0 text-white text-xs">Deliver to</p>
                </div>
                <div>
                    <p className="m-0 text-white text-sm font-extrabold">Iran, Islamic Rep...</p>
                </div>
            </div>
        </div>
    </>;
};

export default SelectCountry;