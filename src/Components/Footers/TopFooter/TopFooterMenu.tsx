import React from "react";
import {topFooterMenuItems} from "Data/TopFooterMenuData";

const TopFooterMenu = (): JSX.Element => {
    return <>
        <div className="text-white text-[13px] bg-dark-sub-nav flex flex-row justify-center py-2 md:py-12">
            {
                topFooterMenuItems.map(item =>
                    <div key={item.topic} className="lg:px-10 flex flex-col">
                            <p className="text-[16px] font-bold">{item.topic}</p>
                            {
                                item.subMenu.map(subItem =>
                                    <div key={subItem.key} className="py-1">
                                        <a href="#" className="text-[#DDD] text-[14px] hover:underline">{subItem.content}</a>
                                    </div>
                                )
                            }
                    </div>
                )
            }
        </div>
    </>;
}

export default TopFooterMenu;