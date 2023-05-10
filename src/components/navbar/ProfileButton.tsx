import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import React, {useCallback, useContext} from "react";
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import {Link} from "./Navbar.styles";
import {UserContext} from "../../context/UserContext";
import {useNavigate} from "react-router-dom";
import {CLINIC_ID, CLINIC_NAME} from "../../constants/constants";
import {ClinicContext} from "../../context/ClinicContext";
import {NavbarContext} from "../../context/NavbarContext";
import {UnLoginPages} from "../../models/pages/UnLoginPages";



export const ProfileButton= () => {

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const { userModifier } = useContext(UserContext);
    const { clinicModifier } = useContext(ClinicContext);
    const {pagesModifier} = useContext(NavbarContext);
    const navigate = useNavigate();
    const logout = useCallback(() => {
        userModifier(null);
        clinicModifier(null);
        localStorage.removeItem('ACCESS_TOKEN')
        localStorage.removeItem(CLINIC_NAME)
        localStorage.removeItem(CLINIC_ID)
        pagesModifier(UnLoginPages)
        navigate("/");
    }, [navigate,  userModifier,clinicModifier]);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
                <Box sx={{ flexGrow: 0 ,marginRight:3}} >
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                    <MenuItem onClick={handleCloseUserMenu} ><Link href={"/profile"}>Profil</Link></MenuItem>
                    <MenuItem onClick={()=>{handleCloseUserMenu();logout();}}>Wyloguj</MenuItem>
                    </Menu>
                </Box>

    );
}