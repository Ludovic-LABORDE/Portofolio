import { Navbar } from '../Navbar.js';
import { Social } from '../../Card/Social.js';
import { useSelector, useDispatch } from 'react-redux'
import { setActive } from '../../../store/reducers/dataReducer.js';
import './Navbar-mobile.scss'

const NavbarMobile = () => {

    const active = useSelector(state => state.data.active);
    const dispatch = useDispatch();
    // console.log(Navbar)
    return (
        <nav className={`mobile--menu ${active}`}>
            <div className='overlay' onClick={() => dispatch(setActive(''))}></div>
            <div className='mobile--menu--list'>
                <div className='mobile--menu--wrap'>
                    <p>Menu</p>
                    <ul className='nav--responsive'>
                        {Navbar.map((index) => {
                            return(
                            <li key={index.id}>
                                <a href={index.section}>
                                    <i className={index.class}></i>
                                    <span>{index.alt}</span>
                                </a>
                            </li>
                            )
                        })}
                    </ul>
                </div>
                <div className='mobile--menu--social'>
                    <p>Social</p>
                    <ul className='social--links'>
                        {Social.map((index) => {
                            return(
                            <li key={index.id}>
                                <a href={index.link}>
                                    <i className={index.class}></i>
                                </a>
                            </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavbarMobile;