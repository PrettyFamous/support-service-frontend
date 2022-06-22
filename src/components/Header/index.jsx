import { burger, logout, search, home, globe, archive, pie, dollar, database, arrow } from '../../assets/img'
import { useLocation, useNavigate } from 'react-router-dom'
import Notifications from '../Notifications'

import './Header.scss'

import photoPng from '../../assets/img/profile-photo.png'
import { useState } from 'react'

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuSwitcher = () => {
    setMenuOpened(!menuOpened)
  }

  return (
    <header className='header'>
      {location.pathname === '/claims' && 
        (<div className='header__container'>
          <input className='header__search' type="text" placeholder='Search'/>
          <img className='header__search-icon' src={search} alt="search"/>
         </div>
        )
      }

      {menuOpened 
        ? <div className='header__menu'>
            <div className='menu__buttons'>
              <span className="menu__item active" onClick={() => {
                  navigate("/claims")
                  setMenuOpened(!menuOpened)
                }}>
                <img src={home} /> Home
              </span>
              <span className="menu__item" href="#">
                <img src={globe} /> Services
              </span>
              <span className="menu__item" href="#">
                <img src={archive} /> Storage
                </span>
              <span className="menu__item" href="#">
                <img src={pie} /> Charts
              </span>
              <span className="menu__item" href="#">
                <img src={dollar} /> Currency
              </span>
              <span className="menu__item" href="#">
                <img src={database} /> Base
              </span>
              <span className="menu__item" href="#">
                <img src={arrow} /> Locations
              </span>
            </div>
            <div className='menu__blur' onClick={menuSwitcher}></div>
          </div>
        : <img className="header__menu-button" src={burger} onClick={menuSwitcher}></img>}
      <a className="header__notifications" href="#"><Notifications /></a>
      <img className="header__photo" src={photoPng} alt="photo"/>
      <a href="#" className='header__fullname'>Ivan Ivanov</a>
      <a href="#" className='header__logout'><img src={logout} alt="logout" /></a>
    </header>
  )
}
export default Header