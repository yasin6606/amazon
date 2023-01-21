import React from "react";
import {ReactComponent as AmazonIcon} from "Assets/Icons/amazon.svg";

const Loading = (): JSX.Element => {
    return <>
        <div className="h-screen flex justify-center items-center bg-amber-300">
            <AmazonIcon color="black"/>
        </div>
    </>;
};

export default Loading;