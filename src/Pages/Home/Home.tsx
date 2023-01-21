import React from "react";
import HeroShopping from "Components/Pages/Home/HeroShopping";
import HomeCarts from "Components/Pages/Home/HomeCarts";

const Home = (): JSX.Element => {
    return <>
        <div className="bg-[#E3E6E6] flex justify-center pb-6">
            <div className="container max:auto flex flex-col">
                <div className="z-0 flex-1">
                    <HeroShopping/>
                </div>
                <div className="z-[1] flex-[3]">
                    <HomeCarts/>
                </div>
            </div>
        </div>
    </>;
};

export default Home;