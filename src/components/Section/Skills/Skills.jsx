import '../Section.scss'
import './Skills.scss'

const Skills = ({ children, props }) => {
    return (
        <section id='Skills' ref={props}>
            <div className='custom--container reveal'>
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

export default Skills;