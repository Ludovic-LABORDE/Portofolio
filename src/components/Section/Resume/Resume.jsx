import '../Section.scss'
import './Resume.scss'

const Resume = ({children}) => {
    return (
        <section>
            <div className='custom--container'>
                <div className='hero--content content--width'>
                    <div className='section--header'>
                        {children}
                        Resume
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume;