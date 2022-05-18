import React, {useState} from "react";
import search from "Assets/Icons/search.svg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const SearchBar = (): JSX.Element => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const options: any[] = [
        "All Departments",
        "Arts & Crafts",
        "Automotive",
        "Baby",
        "Beauty & Personal Care",
        "Books",
        "Boys' Fashion",
        "Computers",
        "Deals",
        "Digital Music",
        "Electronics",
        "Girls' Fashion",
        "Health & Household",
        "Home & Kitchen",
        "Industrial & Scientific",
        "Kindle Store",
        "Luggage",
        "Men's Fashion",
        "Movies & TV",
        "Music, CDs & Vinyl",
        "Pet Supplies",
        "Prime Video",
        "Software",
        "Sports & Outdoors",
        "Tools & Home Improvement",
        "Toys & Games",
        "Video Games",
        "Women's Fashion"
    ];

    return <>
        <div className="container flex">
            <div>
                <div className="flex cursor-pointer rounded-l-md bg-neutral-200 border-r" onClick={handleClick}>
                    <div>
                        <p className="m-0 h-10 px-2 flex items-center">All</p>
                    </div>
                    <div className="flex items-center">
                        <ArrowDropDownIcon/>
                    </div>
                </div>
                <Menu
                    MenuListProps={{
                        'aria-labelledby': 'long-button',
                    }}
                    PaperProps={{
                        className: "h-1/2"
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    {options.map((option) => (
                        <MenuItem key={option} selected={option === 'Pyxis'}>
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
            <div className="flex-1">
                <input type="search" className="h-10 w-full"/>
            </div>
            <div>
                <img src={search} alt="search_icon" className="rounded-r-md bg-orange-300 h-10 px-2"/>
            </div>
        </div>
    </>;
};

export default SearchBar;