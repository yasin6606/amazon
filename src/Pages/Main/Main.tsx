import React from "react";
import {Outlet} from "react-router";
import MainHeader from "Components/Headers/MainHeader/MainHeader";
import MainFooter from "../../Components/Footers/MainFooter/MainFooter";

const Main = (): JSX.Element => {
    return <>
        <div className="flex flex-col">
            <MainHeader/>
            <div>
                <Outlet/>
            </div>
            <MainFooter/>
        </div>
    </>;
};

export default Main;