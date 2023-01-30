import React from "react";
import {cartsData} from "Data/CartsData";
import Cart from "Components/Pages/Home/Cart";

const HomeCarts = (): JSX.Element => {
    return <>
        <div className="flex flex-wrap justify-evenly gap-x-1 gap-y-5">
            {
                cartsData.map(val =>
                    <Cart key={val.key} item={val}/>
                )
            }
        </div>
    </>;
};

export default HomeCarts;