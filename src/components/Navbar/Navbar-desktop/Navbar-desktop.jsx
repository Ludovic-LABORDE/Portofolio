import { Navbar } from '../Navbar';
import './Navbar-desktop.scss'

const NavbarDesktop = () => {
    // console.log(Navbar)
    return (
        <nav>
            <ul className="desktop--menu">
                {Navbar.map((index) => {
                    return (
                        <li key={index.id}>
                            <a href={index.section}>
                                <span>{index.alt}</span>
                                <i className={index.class}></i>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default NavbarDesktop;