import React from 'react';
import { Navbar } from '../Navbar';
import { handleAnchorClick } from '../../../function/functions';
import './Navbar-desktop.scss';
import { ButtonLangage } from '../../Button/Button';
const NavbarDesktop = () => {
    return (
        <nav>
            <ButtonLangage />
            <ul className="desktop--menu">
                {Navbar.map((index, event) => {
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
