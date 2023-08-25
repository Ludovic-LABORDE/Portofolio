import BioCard from "../../components/Card/Card"
import BurgerIcon from "../../components/Navbar/Burger-icon/Burger-icon";
import NavbarDesktop from "../../components/Navbar/Navbar-desktop/Navbar-desktop";
import NavbarMobile from "../../components/Navbar/Navbar-mobile/Navbar-mobile";
import './Header.scss';

const Header = () => {
    return (
        <div className="smooth--wrapper">

            <BioCard />
            <BurgerIcon />
            <NavbarDesktop />
            <NavbarMobile />
        </div>
    )
}

export default Header;