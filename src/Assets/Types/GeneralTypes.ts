export type ItemsType = {
    // icon?:ReactNode,
    icon?: any,
    itemName: string,
    hasLink?: string,
    subGroups?: GroupsType[]
};

export type GroupsType = {
    key: number,
    title: string,
    needCollapse?: boolean,
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

export type MainFooterItems = {
    key: number,
    header: string,
    content: string,
    link: string
};

export type TopFooterMenuItem = {
    topic: string,
    subMenu: {
        key: number,
        topic: string,
        content: string,
        link: string,
    }[]
};

export type ImagesHero = {
    src: string,
    className: string,
    alt: string,
    order: number
}

type HomeCartImgList = {
    key: number,
    src: string,
    alt: string,
    link?: string
}

export type HomeCart = {
    key: number,
    header: string,
    imgList: HomeCartImgList[],
    link: string
}