import '../Section.scss'
import './About.scss'

const About = ({ children, props }) => {
    return (
        <section className='reveal' id='About' ref={props}>
            <div className='custom--container'>
                <div className='hero--content content--width'>
                    <div className='section--header'>
                        {children}
                        <h1>
                        Introduce    font-size: 78px;
    letter-spacing: -0.2px;
    line-height: 90px;
    margin-bottom: 43px;
    font-weight: 300;                            Introduce    font-size: 78px;
    letter-spacing: -0.2px;
    line-height: 90px;
    margin-bottom: 43px;
    font-weight: 300;
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;