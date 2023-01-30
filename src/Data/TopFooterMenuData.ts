import {TopFooterMenuItem} from "Assets/Types/GeneralTypes";

enum Topic {
    a = "Get to know us",
    b = "Make money with us",
    c = "Amazon Payment Products",
    d = "Let Us Help You"
}

export const topFooterMenuItems: TopFooterMenuItem[] = [
    {
        topic: Topic.a,
        subMenu: [
            {
                key: 1,
                topic: Topic.a,
                content: "careers",
                link: ""
            },
            {
                key: 2,
                topic: Topic.a,
                content: "blog",
                link: ""
            },
            {
                key: 3,
                topic: Topic.a,
                content: "about amazon",
                link: ""
            },
            {
                key: 4,
                topic: Topic.a,
                content: "investor relations",
                link: ""
            },
            {
                key: 5,
                topic: Topic.a,
                content: "amazon devices",
                link: ""
            },
            {
                key: 6,
                topic: Topic.a,
                content: "amazon science",
                link: ""
            }
        ]
    },
    {
        topic: Topic.b,
        subMenu: [
            {
                key: 7,
                topic: Topic.b,
                content: "sell products on amazon",
                link: ""
            },
            {
                key: 8,
                topic: Topic.b,
                content: "sell on amazon business",
                link: ""
            },
            {
                key: 9,
                topic: Topic.b,
                content: "sell apps on amazon",
                link: ""
            },
            {
                key: 10,
                topic: Topic.b,
                content: "become an affiliate",
                link: ""
            },
            {
                key: 11,
                topic: Topic.b,
                content: "advertise your products",
                link: ""
            },
            {
                key: 12,
                topic: Topic.b,
                content: "self-publish with us",
                link: ""
            },
            {
                key: 13,
                topic: Topic.b,
                content: "host an amazon hub",
                link: ""
            },
            {
                key: 14,
                topic: Topic.b,
                content: "see more make money with us",
                link: ""
            },
        ]
    },
    {
        topic: Topic.c,
        subMenu: [
            {
                key: 15,
                topic: Topic.c,
                content: "amazon business card",
                link: ""
            },
            {
                key: 16,
                topic: Topic.c,
                content: "shop with points",
                link: ""
            },
            {
                key: 17,
                topic: Topic.c,
                content: "reload your balance",
                link: ""
            },
            {
                key: 18,
                topic: Topic.c,
                content: "amazon currency convertor",
                link: ""
            },
        ]
    },
    {
        topic: Topic.d,
        subMenu: [
            {
                key: 19,
                topic: Topic.d,
                content: "amazon and COVID-19",
                link: ""
            },
            {
                key: 20,
                topic: Topic.d,
                content: "your account",
                link: ""
            },
            {
                key: 21,
                topic: Topic.d,
                content: "your orders",
                link: ""
            },
            {
                key: 22,
                topic: Topic.d,
                content: "shipping rates & polices",
                link: ""
            },
            {
                key: 23,
                topic: Topic.d,
                content: "returns & replacements",
                link: ""
            },
            {
                key: 24,
                topic: Topic.d,
                content: "manage your content and devices",
                link: ""
            },
            {
                key: 25,
                topic: Topic.d,
                content: "amazon assistant",
                link: ""
            },
            {
                key: 26,
                topic: Topic.d,
                content: "help",
                link: ""
            }
        ]
    }
];