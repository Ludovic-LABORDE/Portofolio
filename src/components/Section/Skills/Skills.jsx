import React from 'react'
import '../Section.scss'
import './Skills.scss'
import { skills } from './Techno'
// import image from '../../../assets/image/Logo/react-logo.png'
const Skills = ({ children, props }) => {
    return (
        <section id='Skills' ref={props}>
            <div className='custom--container reveal'>
                <div className='hero--content content--width'>
                    <div className='section--header'>
                        {children}
                        <div className='skills--header'>
                            <h2>
                                My <span>Advantages</span>
                            </h2>
                        </div>
                        <div className='skills--content' >
                            <div className='skills--inner'>
                            {skills.map((index) => {
                                return (
                                    <div className="skills--box" key={index.id}>
                                            <img src={index.image} style={{width: index.size + 'px'}}/>
                                            <h3>{index.value}</h3>
                                        <p>{index.name}</p>
                                    </div>
                                )
                            })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;