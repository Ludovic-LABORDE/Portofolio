import '../Section.scss'
import './Resume.scss'

const Resume = ({ children, props }) => {
    return (
        <section id='Resume' ref={props}>
            <div className='custom--container reveal'>
                <div className='hero--content content--width'>
                    <div className='section--header'>
                        {children}
                        <div className='resume--header'>
                            <h2>
                                Education & <span>Experience</span>
                            </h2>
                        </div>
                        <div className='resume--detail'>
                            <span className='date'>2023 - Present</span>
                            <h3>Web Developer & Web Mobile</h3>
                            <p>Final Training Project at O'clock</p>
                            <ul>
                                <li>Git Master / Front-end Developer React-JS</li>
                                <li>Collaborative Web Application Development, from Conceptualization to MVP Deployment using Agile Methodology.</li>
                            </ul>
                            <p>O'clock school</p>
                            <ul>
                                <li>Complete Web Developer Training Programs: 798 Hours</li>
                                <li>3 month foundational period: HTML5/CSS3/JavaScript/PHP/MySQL</li>
                                <li>1 month of specialization: React-JS</li>
                            </ul>
                        </div>
                        <div className='resume--detail'>
                            <span className='date'>2022 - 2023</span>
                            <h3>Production Operator & Multifunctional Agent</h3>
                            <p>‌Eviosys Packaging France</p>
                            <ul>
                                <li>Prepare for production and execution of necessary adjustments</li>
                                <li>Carry out preventive and corrective maintenance interventions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume;