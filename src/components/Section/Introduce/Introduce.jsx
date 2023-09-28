import { ButtonProject } from '../../Button/Button';
import { language } from '../../../../lang/language';
import { useSelector } from 'react-redux';
import '../Section.scss'
import './Introduce.scss'

const Introduce = ({ children, props }) => {
    const lang = useSelector(state => state.data.langage)
    const introduce = language[lang].Section.Introduce
    return (
        <section className='first--section' id='Introduce' ref={props}>
            <div className='custom--container reveal'>
                <div className='hero--content content--width'>
                    <div className='hero--header'>
                        {children}
                        <h1>{introduce.title}<span className='title--name'>{introduce.secondTitle}</span>{introduce.thirdTitle}</h1>
                    </div>
                    <p className='hero--content--text'>{introduce.text}</p>
                    <div className='hero--footer'>
                        <div className='hero--exp'>
                            <div>
                                <h2>{introduce.numberExperience}</h2>
                                <p>{introduce.experience}</p>
                            </div>
                            <div>
                                <h2>{introduce.numberProject}</h2>
                                <p>{introduce.project}</p>
                            </div>
                            <ButtonProject />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Introduce;