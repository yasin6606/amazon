import {GroupsType} from "Assets/Types/GeneralTypes";
import LanguageIcon from "@mui/icons-material/Language";
import usaFlag from "Assets/Icons/united-states-of-america.svg";

const Groups: GroupsType[] = [
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
            {
                itemName: "Kindle E-readers & Books",
                subGroups: [
                    {
                        key: 0,
                        title: "kindle e-readers",
                        items: [
                            {
                                itemName: "kindle books",
                                hasLink: "/"
                            },
                            {
                                itemName: "kindle unlimited",
                                hasLink: "/"
                            },
                            {
                                itemName: "prime reading",
                                hasLink: "/"
                            },
                            {
                                itemName: "kindle vella",
                                hasLink: "/"
                            }
                        ]
                    },
                    {
                        key: 1,
                        title: "kindle store",
                        items: [
                            {
                                itemName: "kindle kids",
                                hasLink: "/"
                            },
                            {
                                itemName: "kindle",
                                hasLink: "/"
                            },
                            {
                                itemName: "kindle paperwhite",
                                hasLink: "/"
                            },
                            {
                                itemName: "kindle oasis",
                                hasLink: "/"
                            },
                            {
                                itemName: "accessories",
                                hasLink: "/"
                            },
                            {
                                itemName: "see all kindle e-readers",
                                hasLink: "/"
                            }
                        ]
                    },
                    {
                        key: 2,
                        title: "apps & resources",
                        items: [
                            {
                                itemName: "free kindle reading apps",
                                hasLink: "/"
                            },
                            {
                                itemName: "kindle cloud reader",
                                hasLink: "/"
                            },
                            {
                                itemName: "manage your content and devices",
                                hasLink: "/"
                            }
                        ]
                    }
                ]
            },
            {
                itemName: "Appstore for Android",
                subGroups: [
                    {
                        key: 0,
                        title: "Appstore for Android",
                        items: [
                            {
                                itemName: "all apps and games",
                                hasLink: "/"
                            },
                            {
                                itemName: "games",
                                hasLink: "/"
                            },
                            {
                                itemName: "amazon coins",
                                hasLink: "/"
                            },
                            {
                                itemName: "download amazon appstore",
                                hasLink: "/"
                            },
                            {
                                itemName: "amazon apps",
                                hasLink: "/"
                            },
                            {
                                itemName: "your apps and subscription",
                                hasLink: "/"
                            }
                        ]
                    }
                ]
            }
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
            {hasLink: "/", icon: LanguageIcon, itemName: "english"},
            {hasLink: "/", icon: usaFlag, itemName: "united states"},
            {hasLink: "/", itemName: "customer service"},
            {hasLink: "/", itemName: "sing in"}
        ]
    }
];

export default Groups;