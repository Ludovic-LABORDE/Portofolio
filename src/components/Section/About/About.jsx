import '../Section.scss'
import './About.scss'

const About = ({ children, props }) => {
    return (
        <section id='About' ref={props}>
            <div className='custom--container reveal'>
                <div className='hero--content content--width'>
                    <div className='section--header'>
                        {children}
                        <div className='about--content'>
                            <div className='about--header'>
                                <h2>
                                    My background in web <span>development </span>
                                </h2>
                            </div>
                            <p>
                                I've been drawn to computers since childhood and have always been curious about what lies behind computer programmes and how computers work.
                            </p>
                            <br />
                            <p>
                                My ascent began over a year ago, when I started learning the basics of web development. I then took a course specialising in the front-end of websites.
                            </p>
                            <br />
                            <p>
                                After this training, which enriched me a lot, I'm constantly learning new things while perfecting the skills I've already acquired.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default About;