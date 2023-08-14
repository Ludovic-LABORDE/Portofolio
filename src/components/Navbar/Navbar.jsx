import BurgerIcon from "./Burger-icon/Burger-icon";
import NavbarDesktop from "./Navbar-desktop/Navbar-desktop";
import NavbarMobile from "./Navbar-mobile/Navbar-mobile";

const Navbar = () => {
    return (
        <>
            <BurgerIcon />
            <NavbarDesktop /> 
            <NavbarMobile />
        </>
    )
}

export default Navbar;