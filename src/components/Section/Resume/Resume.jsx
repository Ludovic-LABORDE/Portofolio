import { useSelector } from 'react-redux'
import { language } from '../../../../lang/language'
import { ButtonDownload } from '../../Button/Button'

import '../Section.scss'
import './Resume.scss'

const Resume = ({ children, props }) => {
    const lang = useSelector(state => state.data.langage);
    const resume = language[lang].Section.Resume
    const web = resume.web
    const operator = resume.operator
    return (
        <section id='Resume' ref={props}>
            <div className='custom--container reveal'>
                <div className='hero--content content--width'>
                    <div className='section--header'>
                        {children}
                        <div className='resume--header'>
                            <h2>{resume.title}<span>{resume.secondTitle}</span></h2>
                        </div>
                        <div className='resume--detail'>
                            <span className='date'>{web.firstDate}</span>
                            <h3>{web.firstTitle}</h3>
                            <p>{web.firstSubtitle}</p>
                            <ul>
                                <li>{web.firstRole}</li>
                                <li>{web.firstText}</li>
                            </ul>
                            <p>{web.secondSubtitle}</p>
                            <ul>
                                <li>{web.secondTraining}</li>
                                <li>{web.secondSkills}</li>
                                <li>{web.secondSpe}</li>
                            </ul>
                        </div>
                        <div className='resume--detail'>
                            <span className='date'>{operator.firstDate}</span>
                            <h3>{operator.firstTitle}</h3>
                            <p>{operator.firstSubtitle}</p>
                            <ul>
                                <li>{operator.firstRole}</li>
                                <li>{operator.firstText}</li>
                            </ul>
                        </div>
                        <div className='resume--button'>
                            <ButtonDownload />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume;