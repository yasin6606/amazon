import React from "react";
import {HomeCart} from "Assets/Types/GeneralTypes";

const SeparatedCard = ({item}: { item: HomeCart }): JSX.Element => {
    return <>
        <div className="flex flex-col justify-between basis-1/5">
            <div className="flex justify-evenly flex-col flex-1 bg-white p-2 border rounded shadow-md">
                <div>
                    <h2 className="font-bold capitalize">{item.header}</h2>
                </div>
                <div>
                    <button
                        className="bg-[#FFD814] border-[#FCD200] w-full rounded-md shadow-xl visited:text-[#007185] hover:bg-yellow-400 text-[#0F1111] text-[13px] leading-[29px]">Sign
                        in securely
                    </button>
                </div>
            </div>
            <div className="flex-[2] px-1 pt-1 md:px-4 md:pt-4">
                <a href="#">
                    <img src={item.imgList[0].src} className="shadow-md" alt={item.imgList[0].alt}/>
                </a>
            </div>
        </div>
    </>;
};

export default SeparatedCard;