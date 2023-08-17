import '../Section.scss'
import './Introduce.scss'

const Introduce = ({ children, props }) => {
    return (
        <section className='first--section reveal' id='Introduce' ref={props}>
            <div className='custom--container'>
                <div className='hero--content content--width'>
                    <div className='section--header'>
                        {children}
                        <h1>
                        Hello, I'm <span className='title--name'>Ludovic</span>, a passionate web developer.
                        </h1>
                    </div>
                    <p>
                    "Every line of code I write is an opportunity to create, innovate, and let my passion for development shape the digital future."
                    </p>
                    <a className='project--btn' href='#Project'>
                        <span >My Project</span>
                        <i className='las la-arrow-down'></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Introduce;