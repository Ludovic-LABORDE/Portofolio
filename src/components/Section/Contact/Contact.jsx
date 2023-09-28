import '../Section.scss'
import './Contact.scss'
import { useForm } from 'react-hook-form'
import { ButtonSubmit } from '../../Button/Button'
import { sendFeedback } from '../../../function/functions'
import { useSelector } from 'react-redux'
import { language } from '../../../../lang/language'

const Contact = ({ children, props }) => {
    const lang = useSelector(state => state.data.langage)
    const contact = language[lang].Section.Contact
    const input = contact.input
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        const templateID = import.meta.env.VITE_TEMPLATE_ID;
        const serviceID = import.meta.env.VITE_SERVICE_ID;

        sendFeedback(serviceID, templateID, {
            name: data.name,
            phone: data.phone,
            email: data.email,
            subject: data.subject,
            message: data.message,
        });

        reset();
    }
    return (
        <section id='Contact' ref={props}>
            <div className='custom--container reveal'>
                <div className='hero--content content--width'>
                    <div className='section--header'>
                        {children}
                        <div className='contact--header'>
                            <h2>{contact.title} <span>{contact.secondTitle}</span></h2>
                        </div>
                        <div className='contact--content'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {input.map(({ name, placeholder, required, label, id, type }) => {

                                    return (
                                        <div className='box--input' key={id}>
                                            <label>{label}{required && <span> *</span>}</label>
                                            <input
                                                className='contact--input'
                                                placeholder={placeholder}
                                                type={type}
                                                {...register(name)}
                                            />
                                        </div>
                                    )
                                })}
                                <div className='box--inputMessage'>

                                    <label>{contact.textarea.label}<span>*</span></label>
                                    <textarea
                                        className='contact--inputMessage'
                                        placeholder={contact.textarea.placeholder}
                                        type='text'
                                        {...register('message')}
                                    />
                                </div>
                                <ButtonSubmit />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;