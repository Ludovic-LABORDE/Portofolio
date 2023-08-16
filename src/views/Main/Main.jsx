import { Title } from "../../components/Section/Section-name/section-title";
import './Main.scss'

const Main = () => {
    return (
        <main className='wrapper--main'>
            <section>
                <div className='custom--container'>
                    {Title.map((index) => {
                        return (
                            <h4 key={index.id} className='subtitle'>
                                <i className={index.class}></i>
                                {index.name}
                            </h4>
                        )
                    })}
                </div>
            </section>
        </main>
    )
}

export default Main;