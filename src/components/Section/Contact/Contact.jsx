import { useForm } from 'react-hook-form'
import '../Section.scss'
import './Contact.scss'
import { ButtonSubmit } from '../../Button/Button'
import { Input } from './Input'
import { sendFeedback } from '../../../function/functions'

const Contact = ({ children, props }) => {

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
                            <h2>
                                Let's Work <span>Together!</span>
                            </h2>
                        </div>
                        <div className='contact--content'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {Input.map(({ name, placeholder, required, label, id, type }) => {

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

                                    <label>MESSAGE <span>*</span></label>
                                    <textarea
                                        className='contact--inputMessage'
                                        placeholder='Your message'
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