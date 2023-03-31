import React, {useEffect, useState} from "react";
import {Logo, Menu, Toggle, Wrapper,MenuItem, Login} from "./Navbar.styles";
import {link} from "../../models/Link";
import {Link, Navigate, Outlet} from "react-router-dom";
import {ACCESS_TOKEN} from "../../constants/constants";




interface NavbarProps {
    menuItems: link[];
}

export const Navbar: React.FC<NavbarProps> = ({ menuItems }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const logout = () => localStorage.removeItem('ACCESS_TOKEN')

    useEffect(() => {
        const accessToken = localStorage.getItem('ACCESS_TOKEN');
        if (accessToken) {
            setIsLogged(true);
        }
    }, []);



    return (
        <>
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
                {isLogged ? (
                    <Link to={"/"}>
                    <Login onClick={logout} >
                        Log Out
                    </Login>
                    </Link>
                ) : (
                    <Link to={"/login"}>
                        <Login onClick={toggle} >
                            Login
                        </Login>
                    </Link>
                )}
            </Menu>
        </Wrapper>
        <Outlet/>
        </>
    );
};

