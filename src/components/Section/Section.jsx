import React from "react";
import About from "./About/About";
import Introduce from "./Introduce/Introduce";
import Skills from "./Skills/Skills";
import Resume from "./Resume/Resume";
import Contact from "./Contact/Contact";

const Section = ({ children }) => {
    return (
        <>
            {children.key == 1 ? <Introduce children={children} /> : ''}
            {children.key == 2 ? <About children={children} /> : ''}
            {children.key == 3 ? <Resume children={children} /> : ''}
            {children.key == 4 ? <Skills children={children} /> : ''}
            {children.key == 5 ? <Contact children={children} /> : ''}
        </>
    )
}

export default Section;