import { burger, logout, search, home, globe, archive, pie, dollar, database, arrow } from '../../assets/img'
import { useLocation, useNavigate } from 'react-router-dom'
import Notifications from '../Notifications'

import './Header.scss'

import photoPng from '../../assets/img/profile-photo.png'
import { useState } from 'react'

const Header = ({setLogged, setSearch}) => {
  const [menuOpened, setMenuOpened] = useState(false)
  const [searchParam, setSearchParam] = useState('')
  const fullName = JSON.parse(localStorage.getItem("userInfo")).data.fullName
  const location = useLocation()
  const navigate = useNavigate()

  const menuSwitcher = () => {
    setMenuOpened(!menuOpened)
  }

  const handleLogout = () => {
    localStorage.removeItem("userInfo")
    setLogged(null)
    navigate('/login')
  }

  return (
    <header className='header'>
      {location.pathname === '/claims' && 
        <>
          <div className='header__container'>
            <input 
              className='header__search' 
              type="text" 
              placeholder='Search' 
              onChange={e => setSearch(e.target.value.toUpperCase())} 
            />
            <img className='header__search-icon' src={search} alt="search" />
          </div>
        </>
      }

      {menuOpened 
        ? <div className='header__menu'>
            <div className='menu__buttons'>
              <span className="menu__item active" onClick={() => {
                  navigate("/claims")
                  setMenuOpened(!menuOpened)
                }}>
                <img src={home} alt=""/> Home
              </span>
              <span className="menu__item">
                <img src={globe} alt=""/> Services
              </span>
              <span className="menu__item">
                <img src={archive} alt=""/> Storage
                </span>
              <span className="menu__item">
                <img src={pie} alt=""/> Charts
              </span>
              <span className="menu__item">
                <img src={dollar} alt=""/> Currency
              </span>
              <span className="menu__item">
                <img src={database} alt=""/> Base
              </span>
              <span className="menu__item">
                <img src={arrow} alt=""/> Locations
              </span>
            </div>
            <div className='menu__blur' onClick={menuSwitcher}></div>
          </div>
        : <img className="header__menu-button" src={burger} onClick={menuSwitcher} alt="menu"></img>}
      <a className="header__notifications" href="#"><Notifications /></a>
      <img className="header__photo" src={photoPng} alt="photo"/>
      <a href="#" className='header__fullname'>{fullName}</a>
      <a className='header__logout'><img src={logout} alt="logout" onClick={handleLogout}/></a>
    </header>
  )
}
export default Header