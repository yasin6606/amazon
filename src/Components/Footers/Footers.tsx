import React from "react";
import TopFooter from "Components/Footers/TopFooter/TopFooter";
import MainFooter from "Components/Footers/MainFooter/MainFooter";

const Footers = (): JSX.Element => {
    return <>
        <div className="flex flex-col">
            <div>
                <TopFooter/>
            </div>
            <div>
                <MainFooter/>
            </div>
        </div>
    </>;
};

export default Footers;