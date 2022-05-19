import React, {useState} from "react";
import Collapse from "@mui/material/Collapse";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import usaFlag from "Assets/Icons/united-states-of-america.svg";
import LanguageIcon from '@mui/icons-material/Language';
import {Link} from "react-router-dom";
import {ItemsType, GroupsType, ItemSelectionType} from "Assets/Types/GeneralTypes";

// Component for each item in lists
const ItemMenuComponent = (props: { item: ItemsType, itemSelection: any }): JSX.Element => {

    const select = () => props.itemSelection(props.item);

    const row = () =>
        <div
            key={props.item.itemName}
            className="flex justify-between py-2 text-gray-800 text-sm cursor-pointer"
            onClick={select}
        >
            <div className={props.item.icon ? "pr-2" : "hidden"}>
                {props.item.icon}
            </div>
            <div className="flex-1">
                <p className="m-0 capitalize text-[14px]" children={props.item.itemName}/>
            </div>
            {
                !props.item.hasLink && <div>
                    <ArrowForwardIosIcon fontSize="small"/>
                </div>
            }
        </div>;

    return props.item.hasLink ? <Link to={props.item.hasLink} children={row()}/> : row();
};

// Component for collapse for (See All)
const CollapseComponent = (props: { items: ItemsType[], itemSelection: ItemSelectionType }): JSX.Element => {

    const [collapse, setCollapse] = useState<boolean>(false);

    const collapseHandler = (): void => {
        setCollapse(!collapse);
    };

    return <>
        <Collapse in={collapse}>
            {
                props.items.map((y, i) =>
                    i >= 4 &&
                    <ItemMenuComponent
                        key={y.itemName} item={y}
                        itemSelection={() => props.itemSelection(y.itemName)}
                    />
                )
            }
        </Collapse>
        <div className="flex items-center cursor-pointer" onClick={collapseHandler}>
            <div>
                <p className="m-0 capitalize text-[14px]">see all</p>
            </div>
            <div>
                <KeyboardArrowDownIcon className={collapse ? "rotate-180" : ""}/>
            </div>
        </div>
    </>;
};

// The main component that return menus of drawer
const MenuDrawerContent = (props: { itemSelection: ItemSelectionType }): JSX.Element => {

    const groups: GroupsType[] = [
        {
            key: 0,
            needCollapse: false,
            title: "Digital Content & Devices",
            items: [
                {itemName: "amazon music"},
                {itemName: "Kindle E-readers & Books"},
                {itemName: "Appstore for Android"}
            ]
        },
        {
            key: 1,
            needCollapse: true,
            title: "Shop By Department",
            items: [
                {itemName: "Electronics"},
                {itemName: "computers"},
                {itemName: "smart home"},
                {itemName: "arts & crafts"},
                {itemName: "automotive"},
                {itemName: "baby"},
                {itemName: "beauty and personal care"},
                {itemName: "women's fashion"},
                {itemName: "men's fashion"},
                {itemName: "girls' fashion"},
                {itemName: "boys' fashion"},
                {itemName: "health and household"},
                {itemName: "home and kitchen"},
                {itemName: "industrial and scientific"},
                {itemName: "luggage"},
                {itemName: "movies & television"},
                {itemName: "pet supplies"},
                {itemName: "software"},
                {itemName: "sports and outdoors"},
                {itemName: "tools & home improvement"},
                {itemName: "toys and games"},
                {itemName: "video games"}
            ]
        },
        {
            key: 2,
            needCollapse: true,
            title: "Programs & Features",
            items: [
                {itemName: "gift cards"},
                {hasLink: "/", itemName: "#FoundOnAmazon"},
                {itemName: "amazon live"},
                {itemName: "international shopping"},
                {itemName: "amazon second chance"}
            ]
        },
        {
            key: 3,
            needCollapse: false,
            title: "Help & Settings",
            items: [
                {hasLink: "/", itemName: "your account"},
                {hasLink: "/", icon: <LanguageIcon/>, itemName: "english"},
                {hasLink: "/", icon: <img src={usaFlag} alt="usa_flag" className="h-5"/>, itemName: "united states"},
                {hasLink: "/", itemName: "customer service"},
                {hasLink: "/", itemName: "sing in"}
            ]
        }
    ];

    return <>
        {
            groups.map(x =>
                <div key={x.key} className="flex flex-col border-b">
                    <h2 className="font-extrabold py-2" children={x.title}/>
                    {
                        x.items.map((y, i) =>
                            i < 4 &&
                            <ItemMenuComponent
                                key={y.itemName}
                                item={y}
                                itemSelection={props.itemSelection}
                            />
                        )
                    }
                    {
                        x.needCollapse &&
                        <CollapseComponent items={x.items} itemSelection={props.itemSelection}/>
                    }
                </div>
            )
        }
    </>;
};

export default MenuDrawerContent;