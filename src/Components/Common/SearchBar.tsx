import React from "react";
import search from "Assets/Icons/search.svg";

const SearchBar = (): JSX.Element => {
    return <>
        <div className="container flex">
            <div>
                <p className="m-0 h-8 px-3 rounded-l-md flex items-center bg-neutral-100">All</p>
            </div>
            <div className="flex-1">
                <input type="search" className="h-8 w-full"/>
            </div>
            <div>
                <img src={search} alt="search_icon" className="rounded-r-md bg-orange-300 h-8 px-2"/>
            </div>
        </div>
    </>;
};

export default SearchBar;