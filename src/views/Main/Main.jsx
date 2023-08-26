import { Title } from "../../components/Section/Section-name/section-title";
import { switchProjectLeft, switchProjectRight } from "../../store/reducers/caroussel";
import { useSelector, useDispatch } from "react-redux";
import { setActiveBackground } from "../../store/reducers/dataReducer";
import Section from "../../components/Section/Section";
import './Main.scss'
import BioCard from "../../components/Card/Card";
import { useEffect, useState } from "react";


const Main = () => {

    const [imageVisible, setImageVisible] = useState(true);
    const active = useSelector(state => state.data.activeBackgound)
    const { project, position } = useSelector(state => state.caroussel)
    const { name, description, picture } = project
    const dispatch = useDispatch();


    useEffect(() => {
        setImageVisible(false);

        const timeout = setTimeout(() => {
            setImageVisible(true);
        }, 300);

        return () => clearTimeout(timeout);
    }, [position]);

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
                        <div className="img--content">
                            <div className='img--content--inner'>
                                <img src={picture} className={imageVisible ? "visible" : ""}/>
                                <i className="las la-angle-left" onClick={() => dispatch(switchProjectLeft())}></i>
                                <i className="las la-angle-right" onClick={() => dispatch(switchProjectRight())}></i>
                            </div>
                            <div className={`cosmokids--box ${imageVisible ? "visible" : ""}`}>
                                <h3>{name}</h3>
                                <p>{description}</p>
                            </div>
                            <i className="las la-times cross" alt="cross" onClick={() => dispatch(setActiveBackground(false))}></i>
                        </div>
                    </div>
                )}
            </main>
        </>

    )
}

export default Main;