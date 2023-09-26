import { Redirect } from '../../../function/functions';
import '../Section.scss'
import './Introduce.scss'

const Introduce = ({ children, props }) => {
    return (
        <section className='first--section' id='Introduce' ref={props}>
            <div className='custom--container reveal'>
                <div className='hero--content content--width'>
                    <div className='hero--header'>
                        {children}
                        <h1>
                            Hello, I'm <span className='title--name'>Ludovic</span>, a passionate web developer.
                        </h1>
                    </div>
                    <p className='hero--content--text'>
                        "Every line of code I write is an opportunity to create, innovate, and let my passion for development shape the digital future."
                    </p>
                    <div className='hero--footer'>
                        <div className='hero--exp'>
                            <div>
                                <h2>1+</h2>
                                <p>YEARS OF EXPERIENCE</p>
                            </div>
                            <div>
                                <h2>15+</h2>
                                <p>PROJECTS COMPLETED</p>
                            </div>
                        </div>
                            <a className='project--btn' onClick={(event) => Redirect(event, "#Project")}>
                                <span >My Project</span>
                                <i className='las la-arrow-down'></i>
                            </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Introduce;