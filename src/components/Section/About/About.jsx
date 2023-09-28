import '../Section.scss'
import './About.scss'
import { useSelector } from 'react-redux'
import { language } from '../../../../lang/language'

const About = ({ children, props }) => {
    const lang = useSelector(state => state.data.langage);
    const about = language[lang].Section.About
    return (
        <section id='About' ref={props}>
            <div className='custom--container reveal'>
                <div className='hero--content content--width'>
                    <div className='section--header'>
                        {children}
                        <div className='about--content'>
                            <div className='about--header'><h2>{about.title} <span>{about.secondTitle}</span></h2></div>
                            <p>{about.firstText}</p>
                            <br />
                            <p>{about.secondText}</p>
                            <br />
                            <p>{about.thirdText}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default About;