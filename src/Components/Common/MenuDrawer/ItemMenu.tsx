import React from "react";
import {Link} from "react-router-dom";
import {ItemsType} from "Assets/Types/GeneralTypes";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ItemMenu = (props: { item: ItemsType, toggleItemSelector?: any }): JSX.Element => {

    const select = () => props.toggleItemSelector(props.item.itemName);

    const row = () =>
        <div
            key={props.item.itemName}
            className="flex justify-between py-2 text-gray-800 text-sm cursor-pointer"
            onClick={select}
        >
            <div className={props.item.icon ? "pr-2" : "hidden"}>
                {
                    props.item.icon ?
                        typeof props.item.icon === "string" ?
                            <img src={`${props.item.icon}`} alt={props.item.itemName} className="h-5"/>
                            :
                            <props.item.icon/>
                        :
                        null
                }
            </div>
            <div className="flex-1">
                <p className="m-0 capitalize text-[11px] lg:text-[14px]" children={props.item.itemName}/>
            </div>
            {
                !props.item.hasLink && <div>
                    <ArrowForwardIosIcon fontSize="small"/>
                </div>
            }
        </div>;

    return props.item.hasLink ? <Link to={props.item.hasLink} children={row()}/> : row();
};

export default ItemMenu;