import '../Section.scss'
import './Skills.scss'

const Skills = ({children}) => {
    return (
        <section>
            <div className='custom--container'>
                <div className='hero--content content--width'>
                    <div className='section--header'>
                        {children}
                        Skills
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;