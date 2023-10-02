import React from 'react';
import { language } from '../../../../lang/language';
import { useSelector } from 'react-redux';
import { handleAnchorClick } from '../../../function/functions';
import './Navbar-desktop.scss';
import { ButtonLangage } from '../../Button/Button';
const NavbarDesktop = () => {
    const lang = useSelector(state => state.data.langage)
    const navbar  = language[lang].Navbar
    return (
        <nav>
            <ButtonLangage classname='desktop'/>
            <ul className="desktop--menu">
                {navbar.map((index) => {
                    return (
                        <li key={index.id}>
                            <a
                                href={`#${index.section}`}
                                className="link--section"
                                onClick={(event) => handleAnchorClick(event, `#${index.section}`)}
                            >
                                <span>{index.alt}</span>
                                <i className={`${index.class}`}></i>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default NavbarDesktop;
