import '../Section.scss'
import './About.scss'

const About = ({ children }) => {
    return (
        <section>
            <div className='custom--container'>
                <div className='hero--content content--width'>
                    <div className='section--header'>
                        {children}
                        About
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;