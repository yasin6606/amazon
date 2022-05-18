import React from "react";
import {Outlet} from "react-router";

const Index = (): JSX.Element => {
    return <>
        <Outlet/>
    </>;
};

export default Index;