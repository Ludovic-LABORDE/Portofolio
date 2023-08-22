import { Title } from "../../components/Section/Section-name/section-title";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveBackground } from "../../store/reducers/dataReducer";
import Section from "../../components/Section/Section";
import './Main.scss'


const Main = () => {
    const active = useSelector(state => state.data.activeBackgound)
    const dispatch = useDispatch();
    // const [isTurn, setIsTurn] = useState(false)
    return (
        <>

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
                {active && (
                    <div >
                        <div className='background--black' onClick={() => dispatch(setActiveBackground(false))}>
                        </div>
                        <div className='img--content'>
                            <div className='img--content--inner'>
                                <img src="https://dummyimage.com/800x400/fff/aaa" />
                                {/* <i class="las la-angle-up info"></i> */}
                                <i class="las la-times cross" onClick={() => dispatch(setActiveBackground(false))}></i>
                            </div>
                        </div>
                    </div>
                )}

            </main>


        </>

    )
}

export default Main;