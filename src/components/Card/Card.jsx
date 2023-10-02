import Avatar from '@mui/joy/Avatar';
import { Social } from './Social';
import { FakeButton } from '../Button/Button'
import { language } from '../../../lang/language'; 
import { useSelector } from 'react-redux';
import photo from '../../../public/static/images/Logo/ludovic-laborde-img.png'
import './Card.scss'


const BioCard = () => {
  const lang = useSelector(state => state.data.langage)
  const card = language[lang].Card

  return (
    <div className="sidebar">

      <div className="sidebar--header">
        <div className="sidebar--status"><span>{card.firstStatus}</span><span>{card.secondStatus}</span></div>
        <i className="las la-code"></i>
      </div>
      <Avatar alt="Ludovic Laborde" className="avatar" src={photo} sx={{ width: 100, height: 100, margin: '20px' }} />
      <h2 className="sidebar--email">laborde.contact1@gmail.com</h2>
      <h2 className="sidebar--adress">Dijon, France</h2>
      <p className="sidebar--copyright">{card.copyright}</p>
      <ul className="sidebar--social">
        {Social.map((index) => {
          return (
            <li key={index.id}>
              <a href={index.link} target='_blank'>
                <i className={index.class}></i>
              </a>
            </li>
          )
        })}
      </ul>
      <FakeButton href="#Contact" />
    </div>
  )
}
export default BioCard; 