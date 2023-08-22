import '../Section.scss'
import './Project.scss'

const Project = ({ children, props }) => {
    return (
        <section id='Project' ref={props}>
            <div className='custom--container reveal'>
                <div className='hero--content content--width'>
                    <div className='section--header'>
                        {children}
                        <div className='project--header'>
                            <h1>
                                My <span>Project</span>
                            </h1>
                        </div>
                        <div className='project--content'>
                            <div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project;