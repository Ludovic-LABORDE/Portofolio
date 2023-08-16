import '../Section.scss'
import './Contact.scss'

const Contact = ({children}) => {
    return (
        <section>
            <div className='custom--container'>
                <div className='hero--content content--width'>
                    <div className='section--header'>
                        {children}
                        Contact
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;