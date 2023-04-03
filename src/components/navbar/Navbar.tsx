import React, {useEffect, useState} from "react";
import {Logo, Menu, Toggle, Wrapper, MenuItems, MenuItem, Login, MyBox, MidLogo} from "./Navbar.styles";
import {link} from "../../models/Link";
import {Link, Outlet} from "react-router-dom";
import {ACCESS_TOKEN} from "../../constants/constants";
import logo from "../../resources/img/logo.png"
import {ProfileButton} from "./ProfileButton";




interface NavbarProps {
    pages: link[];
}

export const Navbar: React.FC<NavbarProps> = ({ pages }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLogged, setIsLogged] = useState(false);

    const logoPath = "./public/img/logo.png";
    const logout = () => localStorage.removeItem('ACCESS_TOKEN')
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const accessToken = localStorage.getItem('ACCESS_TOKEN');
        if (accessToken) {
            setIsLogged(true);
        }
    }, []);



    return (
        <>
        <Wrapper>
            <Logo src={logo} alt="Logo"></Logo>
            <Toggle onClick={toggle}>
                <span />
                <span />
                <span />
            </Toggle>
            <MidLogo src={logo} alt="Logo"></MidLogo>
            <Menu isOpen={isOpen}>
                <MenuItems>
                    {pages.map((page) => (
                        <MenuItem key={page.label} href={page.link}>
                            {page.label}
                        </MenuItem>
                    ))}
                </MenuItems>
            </Menu>
            {!isLogged ? (
                <Link to={"/login"}>
                    <Login  >
                        Login
                    </Login>
                </Link>
            ):(
                <ProfileButton/>
            )}
        </Wrapper>
        <Outlet/>
        </>
    );
};

