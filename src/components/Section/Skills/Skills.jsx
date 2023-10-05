import { skills } from './Techno'
import { useSelector } from 'react-redux'
import { language } from '../../../../lang/language'
import '../Section.scss'
import './Skills.scss'

const Skills = ({ children, props }) => {
    const lang = useSelector(state => state.data.langage);
    const advantage = language[lang].Section.Skills
    return (
        <section id='Skills' ref={props}>
            <div className='custom--container reveal'>
                <div className='hero--content content--width'>
                    <div className='section--header'>
                        {children}
                        <div className='skills--header'>
                            <h2>{advantage.title} <span>{advantage.secondTitle}</span></h2>
                        </div>
                        <div className='skills--content' >
                            <div className='skills--inner'>
                            {skills.map((index) => {
                                return (
                                    <div className="skills--box" key={index.id}>
                                            <img src={index.image} alt={index.alt} style={{width: index.size + 'px'}}/>
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