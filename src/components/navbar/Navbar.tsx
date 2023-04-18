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
import {Link, useNavigate} from "react-router-dom";
import logo from "../../resources/img/logo.png"
import {ProfileButton} from "./ProfileButton";
import {UserContext} from "../../context/UserContext";
import {NavbarContext} from "../../context/NavbarContext";


export const Navbar= () =>  {
    const [isOpen, setIsOpen] = useState(false);
    const { currentUser} = useContext(UserContext);
    const { currentPages} = useContext(NavbarContext);
    const navigate = useNavigate()

    const toggle = () => {
        console.log(currentUser)
        setIsOpen(!isOpen);
    }


    return (

        <>
        <Wrapper>
            <LogoLink href={"/clinic"}>
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
                    {currentPages.map((page) => (
                        <MenuItem key={page.label} onClick={()=>{navigate(page.link)}} >
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
        </>
    );
};

