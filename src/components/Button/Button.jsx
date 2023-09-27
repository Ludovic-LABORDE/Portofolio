import './Button.scss'
import { Redirect } from '../../function/functions'
import { useState } from 'react'

export const FakeButton = ({ href }) => {
    return (
        <a className="btn--contact" onClick={(event) => Redirect(event, href)}>
            <i className="las la-envelope"></i>
            CONTACT ME
        </a>
    )
}

export const ButtonSubmit = () => {
    return (
        <button className="btn--contact">
            <i className="las la-envelope"></i>
            SEND MESSAGE
        </button>
    )
}

export const ButtonLangage = () => {
    const [active, setActive] = useState(false);
    return (
        <a className="btn--langage">
            <div className='btn--langage--box'>
                <span className={`btn--langage--box--fr ${active ? 'active' : ''}`} onClick={() => setActive(true)} >fr</span>
                <span className={`btn--langage--box--eng ${!active ? 'active' : ''}`} onClick={() => setActive(false)}>en</span>
            </div>
        </a>
    )
}