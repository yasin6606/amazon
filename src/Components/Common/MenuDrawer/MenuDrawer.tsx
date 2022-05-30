import React from "react";
import Drawer from "@mui/material/Drawer";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from "react-router-dom";
import MenuDrawerGroup from "Components/Common/MenuDrawer/MenuDrawerGroup";
import {State, Anchor, ItemSelection, ItemSelectionType, GroupsType} from "Assets/Types/GeneralTypes";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DrawerMenuData from "Data/DrawerMenuData";

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


    const groupsHandler = (): GroupsType[] | undefined => {
        if (state.itemSelection) {
            let subGroup: GroupsType[] | undefined;

            // find subGroup of selected item
            for (let i = 0; i < DrawerMenuData.length; i++) {
                subGroup = DrawerMenuData[i].items.find(y => y.itemName === state.itemSelection)?.subGroups;

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
            <div className="flex items-center">
                <MenuIcon className="text-white text-[12px] lg:text-[14px]"/>
            </div>
            <div className="flex items-center">
                <p className="m-0 text-[11px] lg:text-[14px] text-white">All</p>
            </div>
        </div>
        <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            PaperProps={{
                className: "w-1/3 xl:w-1/5"
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
                    <MenuDrawerGroup
                        groups={groupsHandler() || DrawerMenuData}
                        isSubGroup={!!state.itemSelection}
                        toggleItemSelector={itemSelectionHandler}
                    />
                </div>
            </div>
        </Drawer>
    </>;
};

export default MenuDrawer;