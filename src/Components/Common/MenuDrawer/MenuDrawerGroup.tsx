import React, {useState} from "react";
import Collapse from "@mui/material/Collapse";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {ItemsType, GroupsType, ItemSelectionType} from "Assets/Types/GeneralTypes";
import ItemMenu from "Components/Common/MenuDrawer/ItemMenu";

// Component for collapse for (See All)
const CollapseComponent = (props: { items: ItemsType[], toggleItemSelector: ItemSelectionType }): JSX.Element => {

    const [collapse, setCollapse] = useState<boolean>(false);

    const collapseHandler = (): void => {
        setCollapse(!collapse);
    };

    return <>
        <Collapse in={collapse}>
            {
                props.items.map((y, i) =>
                    i >= 4 &&
                    <ItemMenu
                        key={y.itemName} item={y}
                        toggleItemSelector={() => props.toggleItemSelector(y)}
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
const MenuDrawerGroup = (props: { groups: GroupsType[] | undefined, toggleItemSelector: ItemSelectionType }): JSX.Element => {
    // console.log(props.groups)
    return <>
        {
            props.groups?.map(group =>
                <div key={group.key} className="flex flex-col border-b px-5">
                    <h2 className="font-extrabold py-2" children={group.title}/>
                    {
                        group.items.map((y, i) =>
                            i < 4 &&
                            <ItemMenu
                                key={y.itemName}
                                item={y}
                                toggleItemSelector={props.toggleItemSelector}
                            />
                        )
                    }
                    {
                        group.needCollapse &&
                        <CollapseComponent items={group.items} toggleItemSelector={props.toggleItemSelector}/>
                    }
                </div>
            )
        }
    </>;
};

export default MenuDrawerGroup;