import { Title } from "../../components/Section/Section-name/section-title";
import Section from "../../components/Section/Section";
import './Main.scss'

const Main = () => {
    return (
        <main className='wrapper--main'>
            {Title.map((index) => {
                return (
                    <Section key={index.id}>
                        
                        <h4 key={index.id} className='subtitle'>
                            <i className={index.class}></i>
                            {index.name}
                        </h4>
                    </Section>
                )
            })}
        </main>
    )
}

export default Main;