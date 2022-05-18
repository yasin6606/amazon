import React, {useState} from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import usaFlag from "Assets/Icons/united-states-of-america.svg";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const options: any[] = [
    'None',
    'Atria',
    'Callisto',
    'Dione',
    'Ganymede',
    'Hangouts Call',
    'Luna',
    'Oberon',
    'Phobos',
    'Pyxis',
    'Sedna',
    'Titania',
    'Triton',
    'Umbriel',
];

const SelectLanguage = (): JSX.Element => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return <>
        <div>
            <div className="flex cursor-pointer" onMouseEnter={handleClick}>
                <div>
                    <img src={usaFlag} alt="usa_flag" className="h-6"/>
                </div>
                <div>
                    <ArrowDropDownIcon className="text-white"/>
                </div>
            </div>
            <Menu
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                    onMouseLeave: handleClose
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {options.map((option) => (
                    <MenuItem key={option} selected={option === 'Pyxis'}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    </>;
};

export default SelectLanguage;