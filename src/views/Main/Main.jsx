import { Title } from "../../components/Section/Section-name/section-title";
import { switchProjectLeft, switchProjectRight } from "../../store/reducers/caroussel";
import { useSelector, useDispatch } from "react-redux";
import { setActiveBackground } from "../../store/reducers/dataReducer";
import Section from "../../components/Section/Section";
import './Main.scss'
import BioCard from "../../components/Card/Card";


const Main = () => {
    const active = useSelector(state => state.data.activeBackgound)
    const { name, description, picture } = useSelector(state => state.caroussel.project)

    const dispatch = useDispatch();
    return (
        <>

            <main className='wrapper--main'>
                <BioCard />
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
                {active && (
                    <div >
                        <div className='background--black' onClick={() => dispatch(setActiveBackground(false))}>
                        </div>
                        <div className='img--content'>
                            <div className='img--content--inner'>
                                <img src={picture} >
                                    <i className="las la-angle-left" onClick={() => dispatch(switchProjectLeft())}></i>
                                    <i className="las la-angle-right" onClick={() => dispatch(switchProjectRight())}></i>
                                </img>
                                <div className='cosmokids--box'>
                                    <h3>{name}</h3>
                                    <p>{description}</p>
                                </div>
                                <i className="las la-times cross" alt="cross" onClick={() => dispatch(setActiveBackground(false))}></i>
                            </div>
                        </div>
                    </div>
                )}

            </main>


        </>

    )
}

export default Main;