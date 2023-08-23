import '../Section.scss'
import './Contact.scss'

const Contact = ({ children, props }) => {
    return (
        <section id='Contact' ref={props}>
            <div className='custom--container reveal'>
                <div className='hero--content content--width'>
                    <div className='section--header'>
                        {children}
                        <div className='contact--header'>
                            <h2>
                                Let's Work <span>Together!</span>
                            </h2>
                        </div>
                        <div className='contact--content'>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;