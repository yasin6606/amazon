import React from "react";
import {Link} from "react-router-dom";
import amazonIcon from "Assets/Icons/amazon.svg";
import SelectCountry from "Components/Common/SelectCountry";
import SearchBar from "Components/Common/SearchBar";
import SelectLanguage from "Components/Common/SelectLanguage";
import Account from "Components/Common/Account";
import cartIcon from "Assets/Icons/cart.svg";

const HeadHeader = (): JSX.Element => {
    return <>
        <div className="flex items-center bg-slate-900">
            <div className="px-3">
                <Link to="/">
                    <img src={amazonIcon} alt="amazon_icon" className="h-12"/>
                </Link>
            </div>
            <div className="px-3">
                <SelectCountry/>
            </div>
            <div className="flex-1">
                <SearchBar/>
            </div>
            <div className="px-3">
                <SelectLanguage/>
            </div>
            <div className="px-3">
                <Account/>
            </div>
            <div className="px-3">
                <Link to="/">
                    <p className="m-0 text-white text-xs">Returns</p>
                    <b className="font-extrabold text-white">& Orders</b>
                </Link>
            </div>
            <div className="px-3">
                <div className="flex">
                    <div>
                        <img src={cartIcon} alt="cart_icon" className="h-9"/>
                    </div>
                    <div className="flex items-end">
                        <p className="m-0 text-white font-extrabold text-xs">Cart</p>
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default HeadHeader;