import { useDispatch } from 'react-redux';
import { setActiveBackground } from '../../../store/reducers/dataReducer';
import { useSelector } from 'react-redux';
import { language } from '../../../../lang/language';
import '../Section.scss'
import './Project.scss'

const Project = ({ children, props }) => {
    const dispatch = useDispatch();
    const lang = useSelector(state => state.data.langage)
    const project = language[lang].Section.Project
    const cosmokids = project.Cosmokids
    return (
        <section id='Project' ref={props}>
            <div className='custom--container reveal'>
                <div className='hero--content content--width'>
                    <div className='section--header'>
                        {children}
                        <div className='project--header'>
                            <h2>{project.title}<span>{project.secondTitle}</span></h2>
                        </div>
                        <div className='project--content'>
                            <div className='project--content--cosmokids'>
                                <div className='cosmokids--content' onClick={() => dispatch(setActiveBackground(true))}>
                                    <img src="static/images/cosmokids/Mockup-application.png"/>
                                    <ul>
                                        <li><a href='#'>{cosmokids.firstTechno}</a></li>
                                        <li><a href='#'>{cosmokids.firstTechno}</a></li>
                                    </ul>
                                </div>
                                <h3>{cosmokids.title}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project;