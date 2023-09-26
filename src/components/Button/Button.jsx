import './Button.scss'
import { Redirect } from '../../function/functions'

export const FakeButton = ({href}) => {
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