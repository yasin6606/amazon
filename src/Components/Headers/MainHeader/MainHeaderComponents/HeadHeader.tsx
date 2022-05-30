import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as AmazonIcon} from "Assets/Icons/amazon.svg";
import SelectCountry from "Components/Common/SelectCountry";
import SearchBar from "Components/Common/SearchBar";
import SelectLanguage from "Components/Common/SelectLanguage";
import Account from "Components/Common/Account";
import {ReactComponent as CartIcon} from "Assets/Icons/cart.svg";

const HeadHeader = (): JSX.Element => {
    return <>
        <div className="flex items-center bg-slate-900">
            <div className="px-3">
                <Link to="/">
                    <AmazonIcon height={50} width={113}/>
                </Link>
            </div>
            <div className="px-3">
                <SelectCountry/>
            </div>
            <div className="flex-1 px-3">
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
                        <CartIcon height={36} width={38}/>
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