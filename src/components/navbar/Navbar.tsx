import React, { useState } from "react";
import {Logo, Menu, Toggle, Wrapper, MenuItem, Login} from "./Navbar.styles";


interface MenuItem {
    label: string;
    link: string;
}

interface NavbarProps {
    menuItems: MenuItem[];
}

export const Navbar: React.FC<NavbarProps> = ({ menuItems }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Wrapper>
            <Logo>Logo</Logo>
            <Toggle onClick={toggle}>
                <span />
                <span />
                <span />
            </Toggle>
            <Menu isOpen={isOpen}>
                {menuItems.map((item) => (
                    <MenuItem key={item.label} href={item.link}>
                        {item.label}
                    </MenuItem>
                ))}
                <Login>
                    Login
                </Login>
            </Menu>
        </Wrapper>
    );
};

