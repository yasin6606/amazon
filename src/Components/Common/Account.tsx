import React, {useState} from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Menu from "@mui/material/Menu";
import {Link} from "react-router-dom";
import SignIn from "Components/Common/SignIn";

const Account = (): JSX.Element => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    type Links = {
        leftHand: { key: number, link: string, title: string }[],
        rightHand: { key: number, link: string, title: string }[]
    };

    const links: Links = {
        leftHand: [
            {
                key: 0,
                link: "",
                title: "Create a List"
            },
            {
                key: 1,
                link: "",
                title: "Find a List or Registry"
            },
            {
                key: 2,
                link: "",
                title: "AmazonSmile Charity Lists"
            },
        ],
        rightHand: [
            {
                key: 0,
                link: "",
                title: "Account"
            },
            {
                key: 1,
                link: "",
                title: "Orders"
            },
            {
                key: 2,
                link: "",
                title: "Recommendations"
            },
            {
                key: 3,
                link: "",
                title: "Browsing History"
            },
            {
                key: 4,
                link: "",
                title: "WatchList"
            },
            {
                key: 5,
                link: "",
                title: "Video Purchases & Rentals"
            },
            {
                key: 6,
                link: "",
                title: "Kindle Unlimited"
            },
            {
                key: 7,
                link: "",
                title: "Content & Devices"
            },
            {
                key: 8,
                link: "",
                title: "Subscribe & Save Items"
            },
            {
                key: 9,
                link: "",
                title: "Memberships & Subscriptions"
            },
            {
                key: 10,
                link: "",
                title: "Music Library"
            }
        ]
    };

    return <>
        <div>
            <div className="flex cursor-pointer" onMouseEnter={handleClick}>
                <div>
                    <p className="m-0 text-white text-xs">Hello, Sign in</p>
                    <b className="m-0 text-white text-xs">Account & Lists</b>
                </div>
                <div className="flex items-end">
                    <ArrowDropDownIcon className="text-white"/>
                </div>
            </div>
            <Menu
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                    onMouseLeave: handleClose
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                hideBackdrop={false}
            >
                <div className="flex flex-col px-9 py-2">
                    <div className="pb-2 border-b">
                        <SignIn/>
                    </div>
                    <div className="flex pt-2">
                        <div className="pr-10 border-r">
                            <h4 className="font-extrabold">Your List</h4>
                            <ul className="list-none">
                                {
                                    links.leftHand.map(x =>
                                        <li key={x.key}
                                            className="text-sm text-gray-800 pb-1 hover:text-orange-400 hover:underline">
                                            <Link to={x.link} children={x.title}/>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                        <div className="pl-10">
                            <h4 className="font-extrabold">Your Account</h4>
                            <ul>
                                {
                                    links.rightHand.map(x =>
                                        <li key={x.key}
                                            className="text-sm text-gray-800 pb-1 hover:text-orange-400 hover:underline">
                                            <Link to={x.link} children={x.title}/>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </Menu>
        </div>
    </>;
};

export default Account;