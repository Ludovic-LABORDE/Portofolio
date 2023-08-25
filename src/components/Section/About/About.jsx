import '../Section.scss'
import './About.scss'

const About = ({ children, props }) => {
    return (
        <section id='About' ref={props}>
            <div className='custom--container reveal'>
                <div className='hero--content content--width'>
                    <div className='section--header'>
                        {children}
                        <div className='about--content'>
                            <div className='about--header'>
                                <h2>
                                    Mon Voyage en <span>Développement</span> Web
                                </h2>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, ad ducimus voluptas vitae aliquam labore accusantium sapiente fugiat id eos rem illo assumenda nihil explicabo dicta molestias quidem doloribus exercitationem totam adipisci modi veritatis inventore eum reprehenderit! Provident, vero delectus facilis aliquid quis excepturi voluptas sed cumque quia voluptatibus repudiandae atque dolor, reiciendis fugit laboriosam, quidem nihil. Esse perferendis quaerat dolorem mollitia tempora ipsam autem aliquid natus officiis sint neque possimus repellendus harum aut consequatur quibusdam ducimus minima, corporis repellat!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;