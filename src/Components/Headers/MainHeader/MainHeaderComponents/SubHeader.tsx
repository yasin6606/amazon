import React from "react";
import {Link} from "react-router-dom";
import MenuDrawer from "Components/Common/MenuDrawer/MenuDrawer";

const SubHeader = (): JSX.Element => {
    return <>
        <div className="flex bg-dark-sub-nav py-2 items-center text-white">
            <div className="px-4">
                <MenuDrawer/>
            </div>
            <div className="px-4">
                <Link to="" className="m-0 text-sm hover:text-orange-400">Today's Deals</Link>
            </div>
            <div className="px-4">
                <Link to="" className="m-0 text-sm hover:text-orange-400">Customer Service</Link>
            </div>
            <div className="px-4">
                <Link to="" className="m-0 text-sm hover:text-orange-400">Registry</Link>
            </div>
            <div className="px-4">
                <Link to="" className="m-0 text-sm hover:text-orange-400">Gift Cards</Link>
            </div>
            <div className="px-4">
                <Link to="" className="m-0 text-sm hover:text-orange-400">Sell</Link>
            </div>
        </div>
    </>;
};

export default SubHeader;