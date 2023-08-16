import Avatar from '@mui/joy/Avatar';
import { Social } from './Social';

import './Card.scss'

const BioCard = () => {
  return (
    <div className="sidebar">
      <div className="sidebar--status"><span>Web</span><span>Developer</span></div>
      <Avatar alt="Ludovic Laborde" src="/static/images/avatar/1.jpg" sx={{ width: 100, height: 100, margin: '20px' }}/>
      <h2 className="sidebar--email">laborde.contact1@gmail.com</h2>
      <h2 className="sidebar--adress">Dijon, France</h2>
      <p className="sidebar--copyright">© 2023 All Rights Reserved</p>
      <ul className="sidebar--social">
        {Social.map((index) => {
          return(
          <li key={index.id}>
            <a href={index.link}>
              <i className={index.class}></i>
            </a>
          </li>
          )
        })}
      </ul>
      <a className="btn--contact" href="#contact">
        <i className="las la-envelope"></i>
        CONTACT ME
      </a>
    </div>
  )
}
export default BioCard; 