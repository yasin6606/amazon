import React from "react";
import Drawer from "@mui/material/Drawer";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from "react-router-dom";
import MenuDrawerContent from "Components/Common/MenuDrawer/MenuDrawerContent";
import ItemContent from "Components/Common/MenuDrawer/ItemContent";
import {State, Anchor, ItemSelection, ItemSelectionType} from "Assets/Types/GeneralTypes";

const MenuDrawer = (): JSX.Element => {

    const [state, setState] = React.useState<State>({
        top: false,
        left: false,
        bottom: false,
        right: false,
        itemSelection: 0
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
                <div className="flex-1 px-5 overflow-auto">
                    {
                        state.itemSelection
                            ?
                            <ItemContent
                                itemSelected={state.itemSelection}
                                itemSelection={itemSelectionHandler}
                            />
                            :
                            <MenuDrawerContent itemSelection={itemSelectionHandler}/>
                    }
                </div>
            </div>
        </Drawer>
    </>;
};

export default MenuDrawer;