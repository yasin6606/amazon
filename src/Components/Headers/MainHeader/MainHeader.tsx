import React from "react";
import HeadHeader from "Components/Headers/MainHeader/MainHeaderComponents/HeadHeader";
import SubHeader from "Components/Headers/MainHeader/MainHeaderComponents/SubHeader";

const MainHeader = (): JSX.Element => {
    return <>
        <div className="flex flex-col">
            <div>
                <HeadHeader/>
            </div>
            <div>
                <SubHeader/>
            </div>
        </div>
    </>;
};

export default MainHeader;