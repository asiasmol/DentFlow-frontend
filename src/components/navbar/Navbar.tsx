import React, {useContext, useState} from "react";
import {
    Logo,
    Menu,
    Toggle,
    Wrapper,
    MenuItems,
    MenuItem,
    Login,
    MidLogo, LogoLink
} from "./Navbar.styles";
import {link} from "../../models/Link";
import {Link, Outlet} from "react-router-dom";
import logo from "../../resources/img/logo.png"
import {ProfileButton} from "./ProfileButton";
import {UserContext} from "../../context/UserContext";





interface NavbarProps {
    pages: link[];
}

export const Navbar: React.FC<NavbarProps> = ({ pages }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { currentUser} = useContext(UserContext);

    const toggle = () => {
        console.log(currentUser)
        setIsOpen(!isOpen);
    }

    return (

        <>
        <Wrapper>
            <LogoLink href={"/"}>
                <Logo src={logo} alt="Logo"></Logo>
            </LogoLink>
            <Toggle onClick={toggle}>
                <span />
                <span />
                <span />
            </Toggle>
            <Link to={"/"}>
                <MidLogo src={logo} alt="Logo"></MidLogo>
            </Link>
            <Menu isOpen={isOpen}>
                <MenuItems>
                    {pages.map((page) => (
                        <MenuItem key={page.label} href={page.link}>
                            {page.label}
                        </MenuItem>
                    ))}
                </MenuItems>
            </Menu>
            {!currentUser ? (
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

