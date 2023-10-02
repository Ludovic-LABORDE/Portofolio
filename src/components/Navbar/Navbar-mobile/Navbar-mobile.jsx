import React from 'react';
import { language } from '../../../../lang/language.js';
import { Social } from '../../Card/Social.js';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveMenu } from '../../../store/reducers/dataReducer.js';
import { handleAnchorClick } from '../../../function/functions';
import { ButtonLangage } from '../../Button/Button.jsx';
import './Navbar-mobile.scss';

const NavbarMobile = () => {
    const lang = useSelector(state => state.data.langage)
    const active = useSelector(state => state.data.activeMenu);
    const navbar = language[lang].Navbar
    const social = language[lang].Social.name
    const dispatch = useDispatch();

    return (
        <nav className={`mobile--menu ${active}`}>

            <div className='overlay' onClick={() => dispatch(setActiveMenu(''))}></div>
            <div className='mobile--menu--list'>
                    <i className="las la-times" onClick={() => dispatch(setActiveMenu(''))}></i>
                <div className='mobile--menu--wrap'>
                    <p>Menu</p>
                    <ul className='nav--responsive'>
                        {navbar.map((index) => {
                            return (
                                <li key={index.id}>
                                    <a
                                        href={`#${index.section}`}
                                        className="link--section"
                                        onClick={(event) => handleAnchorClick(event, `#${index.section}`)}
                                    >
                                        <i className={index.class}></i>
                                        <span>{index.alt}</span>
                                    </a>
                                </li>
                            );
                        })}
                        <ButtonLangage classname='mobile' />
                    </ul>
                </div>
                <div className='mobile--menu--social'>
                    <p>{social}</p>
                    <ul className='social--links'>
                        {Social.map((index) => {
                            return (
                                <li key={index.id}>
                                    <a href={index.link}>
                                        <i className={index.class}></i>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavbarMobile;
