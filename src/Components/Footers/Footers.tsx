import React from "react";
import TopFooter from "Components/Footers/TopFooter/TopFooter";
import MainFooter from "Components/Footers/MainFooter/MainFooter";
import FooterLogin from "Components/Footers/FooterLogin/FooterLogin";

const Footers = (): JSX.Element => {
    return <>
        <div className="flex flex-col">
            <div>
                <FooterLogin/>
            </div>
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