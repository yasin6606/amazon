import React from "react";
import {Outlet} from "react-router";
import MainHeader from "Components/Headers/MainHeader/MainHeader";
import Footers from "Components/Footers/Footers";

const Main = (): JSX.Element => {
    return <>
        <div className="flex flex-col">
            <MainHeader/>
            <div>
                <Outlet/>
            </div>
            <Footers/>
        </div>
    </>;
};

export default Main;