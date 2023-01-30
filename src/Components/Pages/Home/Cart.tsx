import React from "react";
import {HomeCart} from "Assets/Types/GeneralTypes";

const Cart = ({item}: { item: HomeCart }): JSX.Element => {
    return <>
        <div className="flex flex-col justify-between basis-1/5 border rounded bg-[#fff] shadow-md p-2">
            <div>
                <h2 className="font-bold capitalize">{item.header}</h2>
            </div>
            <div className={`flex ${item.imgList.length > 1 ? "flex-wrap" : null}`}>
                {
                    item.imgList.map(itemImg =>
                        <div key={itemImg.key} className={`${item.imgList.length > 1 ? "basis-1/2" : null} px-1 py-2`}>
                            <a href="#">
                                <div>
                                    <img src={itemImg.src} alt={itemImg.alt}/>
                                </div>
                                <div>
                                    <p className="capitalize text-[10px]">{itemImg.link}</p>
                                </div>
                            </a>
                        </div>
                    )
                }
            </div>
            <div>
                <a href="#"
                   className="text-[#007185] text-[13px] hover:underline hover:text-[#f59794] capitalize">{item.link}</a>
            </div>
        </div>
    </>;
};

export default Cart;