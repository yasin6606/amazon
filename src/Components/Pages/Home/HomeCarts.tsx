import React, {useEffect, useState} from "react";
import {cartsData} from "Data/CartsData";
import {HomeCart} from "Assets/Types/GeneralTypes";
import Cart from "Components/Pages/Home/Cart";
import SeparatedCard from "Components/Pages/Home/SeparatedCard";

const HomeCarts = (): JSX.Element => {
    const [state, setState] = useState<HomeCart[]>([]);

    useEffect(() => {
        setState(cartsData);

        return () => {
            setState([]);
        };

    }, []);

    return <>
        <div className="flex flex-wrap justify-evenly gap-x-1 gap-y-5">
            {
                state.map(val =>
                    val.key === 3
                        ?
                        <SeparatedCard key={val.key} item={val}/>
                        :
                        <Cart key={val.header} item={val}/>
                )
            }
        </div>
    </>;
};

export default HomeCarts;