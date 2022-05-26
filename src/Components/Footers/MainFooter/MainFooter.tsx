import React from "react";
import {items} from "Data/MainFooterData";
import {Link} from "react-router-dom";

const MainFooter = (): JSX.Element => {
    return <>
        <div className="bg-dark-main-footer flex flex-col justify-center md:px-[6rem] lg:px-[12rem] xl:px-[25rem] py-7 items-center">
            <div className="flex flex-wrap justify-evenly">
                {
                    items.map(item =>
                        <div key={item.key} className="py-6 px-3 flex-grow-0 flex basis-[14.2857143%]">
                            <Link to={item.link} className="group hover:text-orange-400">
                                <p className="text-white text-[11px] capitalize group-hover:text-inherit">{item.header}</p>
                                <p className="text-gray-500 text-[10px] capitalize group-hover:text-inherit">{item.content}</p>
                            </Link>
                        </div>
                    )
                }
            </div>
            <div className="flex pt-6 justify-evenly w-[55%]">
                <div>
                    <Link to="">
                        <p className="text-white text-[11px] hover:text-orange-400 capitalize">conditions of use</p>
                    </Link>
                </div>
                <div>
                    <Link to="">
                        <p className="text-white text-[11px] hover:text-orange-400 capitalize">privacy notice</p>
                    </Link>
                </div>
                <div>
                    <Link to="">
                        <p className="text-white text-[11px] hover:text-orange-400 capitalize">insert based ads</p>
                    </Link>
                </div>
                <div>
                    <p className="text-white text-[11px] capitalize flex justify-center">
                        s© 1996-2022, Amazon.com, Inc. or its affiliates
                    </p>
                </div>
            </div>
        </div>
    </>;
};

export default MainFooter;