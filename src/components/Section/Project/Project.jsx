import { useDispatch } from 'react-redux';
import { setActiveBackground } from '../../../store/reducers/dataReducer';
import '../Section.scss'
import './Project.scss'

const Project = ({ children, props }) => {
    const dispatch = useDispatch();
    
    
    return (
        <section id='Project' ref={props}>
            <div className='custom--container reveal'>
                <div className='hero--content content--width'>
                    <div className='section--header'>
                        {children}
                        <div className='project--header'>
                            <h2>
                                My <span>Project</span>
                            </h2>
                        </div>
                        <div className='project--content'>
                            <div className='project--content--cosmokids'>
                                <div className='cosmokids--content' onClick={() => dispatch(setActiveBackground(true))}>
                                    <img src="../../../../public/static/images/cosmokids/Mockup-application.png"/>
                                    <ul>
                                        <li><a href='#'>React-JS</a></li>
                                        <li><a href='#'>Laravel/PHP</a></li>
                                    </ul>
                                </div>
                                <h3>Cosmokids - Educationnal Plateform for kids</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project;