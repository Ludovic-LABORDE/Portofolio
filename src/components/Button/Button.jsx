import './Button.scss'
import { Redirect } from '../../function/functions'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setLangage } from '../../store/reducers/dataReducer'
import { setLangageCaroussel } from '../../store/reducers/caroussel'
import { language } from '../../../lang/language'
import { useSelector } from 'react-redux'

export const FakeButton = ({ href }) => {
    const lang = useSelector(state => state.data.langage)
    return (
        <a className="btn--contact" onClick={(event) => Redirect(event, href)}>
            <i className="las la-envelope"></i>
            {language[lang].Button.FakeButton}
        </a>
    )
}

export const ButtonSubmit = () => {
    const lang = useSelector(state => state.data.langage)
    return (
        <button className="btn--contact">
            <i className="las la-envelope"></i>
            {language[lang].Button.ButtonSubmit}
        </button>
    )
}

export const ButtonProject = () => {
    const lang = useSelector(state => state.data.langage)
    return (
        <a className='project--btn' onClick={(event) => Redirect(event, "#Project")}>
            <span>{language[lang].Button.ButtonProject}</span>
            <i className='las la-arrow-down'></i>
        </a>
    )
}

export const ButtonDownload = () => {
    const lang = useSelector(state => state.data.langage)

    return (
        <a href="/static/download/ludovic-laborde-cv.pdf" className='btn--contact' download>
            <i className="las la-download"></i>
            <span>{language[lang].Button.ButtonDownload}</span>
        </a>
    )
}

export const ButtonLangage = ({classname}) => {

    const dispatch = useDispatch()
    const [active, setActive] = useState(false);

    const handleClickFR = () => {
        setActive(true);
        dispatch(setLangage("fr"));
        dispatch(setLangageCaroussel("fr"));
    }

    const handleClickEN = () => {
        setActive(false);
        dispatch(setLangage("en"));
        dispatch(setLangageCaroussel("en"));
    }

    return (
        <a className={`btn--langage ${classname}`}>
            <div className='btn--langage--box'>
                <span className={`btn--langage--box--fr ${active ? 'active' : '' }` } onClick={handleClickFR}>fr</span>
                <span className={`btn--langage--box--eng ${!active ? 'active' : ''}`} onClick={handleClickEN}>en</span>
            </div>
        </a>
    )
}