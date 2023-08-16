import '../Section.scss'
import './Introduce.scss'

const Introduce = ({children}) => {
    return (
        <section className='first--section'>
            <div className='custom--container'>
                <div className='hero--content content--width'>
                    <div className='section--header'>
                        {children}
                        Introduce
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Introduce;