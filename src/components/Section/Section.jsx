import React from "react";
import About from "./About/About";
import Introduce from "./Introduce/Introduce";
import Skills from "./Skills/Skills";
import Resume from "./Resume/Resume";
import Contact from "./Contact/Contact";
import Project from "./Project/Project";
import {useActiveScroll} from "../../hook/useActiveScroll";

const Section = ({ children }) => {
    const anchorRef = useActiveScroll(children.props.children[1]);
    
    return (
        <>
            {children.key == 1 ? <Introduce children={children} props={anchorRef} /> : ''}
            {children.key == 2 ? <About children={children} props={anchorRef} /> : ''}
            {children.key == 3 ? <Resume children={children} props={anchorRef} /> : ''}
            {children.key == 4 ? <Project children={children} props={anchorRef} /> : ''}
            {children.key == 5 ? <Skills children={children} props={anchorRef} /> : ''}
            {children.key == 6 ? <Contact children={children} props={anchorRef} /> : ''}
        </>
    )
}

export default Section;