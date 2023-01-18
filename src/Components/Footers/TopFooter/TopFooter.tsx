import React, {useState} from "react";
import {ReactComponent as AmazonIcon} from "Assets/Icons/amazon.svg";
import {ReactComponent as UsaFlag} from "Assets/Icons/united-states-of-america.svg";
import {ReactComponent as SortIcon} from "Assets/Icons/iconmonstr-sort-1.svg";
import LanguageIcon from "@mui/icons-material/Language";
import {Link} from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import TopFooterMenu from "Components/Footers/TopFooter/TopFooterMenu";

const TopFooter = (): JSX.Element => {

    const radioValues = {
        en: "english-EN",
        es: "español-ES",
    };

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [radioBtnVal, setRadioBtnVal] = useState<string>(radioValues.en);

    const openLanguageMenuHandler = (event: React.MouseEvent<HTMLDivElement>): void => {
        setAnchorEl(event.currentTarget);
    };

    const open = Boolean(anchorEl);

    const closeLanguageMenuHandler = (): void => {
        setAnchorEl(null);
    };

    const radioBtnHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setRadioBtnVal(event.currentTarget.value);
    };

    return <>
        <div className="flex flex-col">
            <div>
                <p className="text-white text-[13px] capitalize flex justify-center py-4 bg-dark-back-btn-top-footer">back
                    to top</p>
            </div>
            <div className="border-b border-zinc-600">
                <TopFooterMenu/>
            </div>
            <div className="flex justify-center bg-dark-sub-nav py-3">
                <div className="px-4 flex items-center">
                    <AmazonIcon height={23} width={76}/>
                </div>
                <div className="flex px-4 items-center">
                    <Link to="">
                        <div className="flex h-fit border border-zinc-500 rounded py-1 mx-1"
                             onMouseOver={openLanguageMenuHandler}>
                            <div className="flex-1 px-1">
                                <LanguageIcon className="text-white"/>
                            </div>
                            <div className="px-1 flex items-center">
                                <p className="text-white text-[13px] capitalize">English</p>
                            </div>
                            <div className="px-1 flex items-center">
                                <SortIcon className="h-3" fill="#808080"/>
                            </div>
                        </div>
                    </Link>
                    <Menu
                        open={open}
                        anchorEl={anchorEl}
                        onClose={closeLanguageMenuHandler}
                        MenuListProps={{
                            onMouseLeave: closeLanguageMenuHandler
                        }}
                    >
                        <MenuItem classes={{root: "py-0"}}>
                            <Radio
                                checked={radioBtnVal === radioValues.en}
                                value={radioValues.en}
                                id={radioValues.en}
                                name="radio-buttons"
                                onChange={radioBtnHandler}
                                classes={{root: "text-[8px] py-0", checked: "text-orange-300"}}
                                sx={{fontSize: "4px"}}
                            />
                            <label htmlFor={radioValues.en}>{radioValues.en}</label>
                        </MenuItem>
                        <MenuItem classes={{root: "py-0"}}>
                            <Radio
                                checked={radioBtnVal === radioValues.es}
                                value={radioValues.es}
                                id={radioValues.es}
                                name="radio-buttons"
                                onChange={radioBtnHandler}
                                classes={{root: "py-0", checked: "text-orange-300"}}
                            />
                            <label htmlFor={radioValues.es}>{radioValues.es}</label>
                        </MenuItem>
                    </Menu>
                    <div className="h-fit border border-zinc-500 rounded py-1 mx-1">
                        <Link to="" className="flex">
                            <div className="flex-1 px-2">
                                <UsaFlag className="h-6"/>
                            </div>
                            <div className="px-2 flex items-center">
                                <p className="text-white text-[13px] capitalize">united states</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default TopFooter;