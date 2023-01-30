import React, {useEffect, useState} from "react";
import {ImagesHero} from "Assets/Types/GeneralTypes";
import {imagesList} from "Data/HeroShoppingData";

const HeroShopping = (): JSX.Element => {

    const [imgList, setImgList] = useState<ImagesHero[]>([]);
    const [showCart, setShowCart] = useState<number>(0);

    // previous button controlling
    const prevBtnFunc = () => {
        setShowCart(prev => {
            if (prev === 0)
                return imgList.length - 1;

            return --prev;
        });
    };

    // next button controlling
    const nextBtnFunc = () => {
        setShowCart(prev => {
            if (prev === imgList.length - 1)
                return 0;

            return ++prev;
        });
    };

    useEffect(() => {
        setImgList(imagesList);

        return () => {
            setImgList([]);
        }
    }, []);

    return <>
        <div id="default-carousel" className="relative" data-carousel="static">
            <div className="relative h-40 rounded-lg md:h-60">
                {
                    imgList.map((val, i) =>
                        <div key={val.src} className={`duration-700 ease-in-out ${showCart !== i && "hidden"}`}>
                            <img src={val.src} className={val.className} alt={val.alt}/>
                        </div>
                    )
                }
            </div>
            <button type="button"
                    className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    onClick={prevBtnFunc}
            >
                <span
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none"
                         stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path
                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button"
                    className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    onClick={nextBtnFunc}
            >
                <span
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none"
                         stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path
                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    </>;
};

export default HeroShopping;