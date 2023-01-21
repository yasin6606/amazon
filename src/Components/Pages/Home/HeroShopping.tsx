import React, {useEffect, useState} from "react";
import {ImagesHero} from "Assets/Types/GeneralTypes";
import FirstImg from "Assets/Images/HeroPart/first.jpg";
import SecondImg from "Assets/Images/HeroPart/second.jpg";
import ThirdImg from "Assets/Images/HeroPart/third.jpg";
import FourthImg from "Assets/Images/HeroPart/fourth.jpg";
import FifthImg from "Assets/Images/HeroPart/fifth.jpg";

const HeroShopping = (): JSX.Element => {

    const [imgList, setImgList] = useState<ImagesHero[]>([]);

    useEffect(() => {
        const imagesList: ImagesHero[] = [
            {
                src: FirstImg,
                className: "absolute block w-full",
                alt: ""
            },
            {
                src: SecondImg,
                className: "absolute block w-full",
                alt: ""
            },
            {
                src: ThirdImg,
                className: "absolute block w-full",
                alt: ""
            },
            {
                src: FourthImg,
                className: "absolute block w-full",
                alt: ""
            },
            {
                src: FifthImg,
                className: "absolute block w-full",
                alt: ""
            }
        ];

        setImgList(imagesList);
    }, []);

    return <>
        <div id="default-carousel" className="relative" data-carousel="static">
            <div className="relative h-56 rounded-lg md:h-96">
                {
                    imgList.map((val, i) =>
                        <div className="duration-700 ease-in-out" data-carousel-item={i === 0 && "active"}>
                            <img src={val.src} className={val.className} alt={val.alt}/>
                        </div>
                    )
                }
            </div>
            <button type="button"
                    className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-prev>
                <span
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none"
                         stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path
                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button"
                    className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-next>
                <span
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none"
                         stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path
                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    </>;
};

export default HeroShopping;