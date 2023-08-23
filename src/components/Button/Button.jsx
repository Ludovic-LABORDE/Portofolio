import './Button.scss'

export const FakeButton = () => {
    return (
        <a className="btn--contact" href="#Contact">
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