import Avatar from '@mui/joy/Avatar';
import { Social } from './Social';
import { FakeButton } from '../Button/Button';
import photo from '../../../public/static/images/pro-photo4.png'
import './Card.scss'

const BioCard = () => {
  return (
    <div className="sidebar">
      <div  className="sidebar--header">
        <div className="sidebar--status"><span>Web</span><span>Developer</span></div>
        <i className="las la-code"></i>
      </div>
      <Avatar alt="Ludovic Laborde" className="avatar" src={photo} sx={{ width: 100, height: 100, margin: '20px' }} />
      <h2 className="sidebar--email">contact1@gmail.com</h2>
      <h2 className="sidebar--adress">Dijon, France</h2>
      <p className="sidebar--copyright">© 2023 All Rights Reserved</p>
      <ul className="sidebar--social">
        {Social.map((index) => {
          return (
            <li key={index.id}>
              <a href={index.link}>
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