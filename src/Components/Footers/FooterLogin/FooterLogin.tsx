import React from "react";
import SignIn from "Components/Common/SignIn";

const FooterLogin = (): JSX.Element => {
    return <>
        <div className="border-t border-b md:my-5 md:py-6 flex justify-center">
            <div className="w-1/2">
                <div className="flex justify-center">
                    <p className="text-[13px]">See personalized recommendations</p>
                </div>
                <SignIn/>
            </div>
        </div>
    </>;
}

export default FooterLogin;