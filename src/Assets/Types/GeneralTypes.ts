import {ReactNode} from "react";

export type ItemsType = {
    icon?: ReactNode,
    itemName: string,
    hasLink?: string
}

export type GroupsType = {
    key: number,
    title: string,
    needCollapse: boolean,
    items: ItemsType[]
};

export type ItemSelection = any;

export type ItemSelectionType = (item: ItemSelection) => any;

export type Anchor = 'top' | 'left' | 'bottom' | 'right';

export type State = {
    top: boolean,
    left: boolean,
    bottom: boolean,
    right: boolean,
    itemSelection: ItemSelection
};