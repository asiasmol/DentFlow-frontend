import {
  NavbarContainer,
  NavbarLink,
  NavbarLinks,
} from "./Navbar.styles";
import { Outlet } from "react-router-dom";

export const Navbar = () => {
  // const { toggleCartDrawer, toggleProfileDrawer } = useContext(DrawerContext);

  return (
    <>
      <NavbarContainer>
        {/*//logo*/}
        <NavbarLinks>
          <NavbarLink to={"/"}>Home</NavbarLink>
        </NavbarLinks>
      </NavbarContainer>
      <Outlet />
    </>
  );
};
