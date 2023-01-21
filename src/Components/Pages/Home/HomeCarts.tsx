import React from "react";
import {cartsData} from "Data/CartsData";
import Cart from "Components/Pages/Home/Cart";

const HomeCarts = (): JSX.Element => {
    return <>
        <div className="flex flex-wrap justify-between gap-5 px-4">
            {
                cartsData.map(val =>
                    <Cart item={val}/>
                )
            }
        </div>
    </>;
};

export default HomeCarts;