import React from "react";
import Drawer from "@mui/material/Drawer";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from "react-router-dom";
import MenuDrawerGroup from "Components/Common/MenuDrawer/MenuDrawerGroup";
import {State, Anchor, ItemSelection, ItemSelectionType, GroupsType} from "Assets/Types/GeneralTypes";
import LanguageIcon from "@mui/icons-material/Language";
import usaFlag from "Assets/Icons/united-states-of-america.svg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const MenuDrawer = (): JSX.Element => {

    const [state, setState] = React.useState<State>({
        top: false,
        left: false,
        bottom: false,
        right: false,
        itemSelection: null
    });

    const itemSelectionHandler: ItemSelectionType = (item: ItemSelection): void => {
        setState({...state, itemSelection: item});
    };

    const toggleDrawer = (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setState({...state, [anchor]: open});
        };

    const anchor = "left";

    const groups: GroupsType[] = [
        {
            key: 0,
            title: "Digital Content & Devices",
            items: [
                {
                    itemName: "amazon music",
                    subGroups: [
                        {
                            key: 0,
                            title: "stream music",
                            items: [
                                {
                                    itemName: "amazon music unlimited",
                                    hasLink: "/"
                                },
                                {
                                    itemName: "free streaming music",
                                    hasLink: "/"
                                },
                                {
                                    itemName: "podcasts",
                                    hasLink: "/"
                                },
                                {
                                    itemName: "open web player",
                                    hasLink: "/"
                                },
                                {
                                    itemName: "download the app",
                                    hasLink: "/"
                                }
                            ]
                        }
                    ]
                },
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

    const groupsHandler = (): GroupsType[] | undefined => {
        if (state.itemSelection) {
            let subGroup: GroupsType[] | undefined;

            // find subGroup of selected item
            for (let i = 0; i < groups.length; i++) {
                subGroup = groups[i].items.find(y => y.itemName === state.itemSelection)?.subGroups;

                if (subGroup)
                    break;
            }

            // prevent show (back header part) in top of drawer menu when selected item does not have subGroup
            if (!subGroup)
                setState({...state, itemSelection: null});

            return subGroup;
        }
    };

    return <>
        <div className="flex cursor-pointer" onClick={toggleDrawer(anchor, true)}>
            <div>
                <MenuIcon className="text-white"/>
            </div>
            <div>
                <p className="m-0 text-white">All</p>
            </div>
        </div>
        <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            PaperProps={{
                className: "w-1/5"
            }}
        >
            <div className="flex flex-col overflow-hidden">
                <div className="flex content-center px-5 py-2 bg-dark-sub-nav">
                    <div className="pr-2">
                        <AccountCircleIcon className="text-white" fontSize="large"/>
                    </div>
                    <div className="pl-2 flex items-center">
                        <h3 className="font-bold text-white">
                            <Link to="">Hello, Sing in</Link>
                        </h3>
                    </div>
                </div>
                {
                    state.itemSelection && <div className="flex border-b px-5 py-3 cursor-pointer">
                        <div className="pr-2">
                            <ArrowBackIcon onClick={() => itemSelectionHandler(null)}/>
                        </div>
                        <div className="flex-1 flex items-center">
                            <p className="m-0 uppercase text-xs" onClick={() => itemSelectionHandler(null)}>main menu</p>
                        </div>
                    </div>
                }
                <div className="flex-1 overflow-auto">
                    <MenuDrawerGroup groups={groupsHandler() || groups} toggleItemSelector={itemSelectionHandler}/>
                </div>
            </div>
        </Drawer>
    </>;
};

export default MenuDrawer;

// <ItemContent
//     itemSelected={state.itemSelection}
//     toggleItemSelector={itemSelectionHandler}
// />
