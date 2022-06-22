import { useLocation } from 'react-router-dom'

import './Header.scss'

import searchSvg from '../../assets/img/icon-search.svg'
import bellSvg from '../../assets/img/icon-bell.svg'
import photoPng from '../../assets/img/profile-photo.png'
import logoutSvg from '../../assets/img/icon-log-out.svg'

const Header = () => {
  const location = useLocation();

  return (
    <header className='header'>
      {location.pathname === '/claims' && 
        (<div className='header__container'>
          <input className='header__search' type="text" placeholder='Search'/>
          <img className='header__search-icon' src={searchSvg} alt="search"/>
         </div>
        )
      }

      <a className="header__notifications" href="#"><img src={bellSvg} alt="notifications" /></a>
      <img className="header__photo" src={photoPng} alt="photo"/>
      <a href="#" className='header__fullname'>Ivan Ivanov</a>
      <a href="#"><img src={logoutSvg} alt="logout" /></a>
    </header>
  )
}
export default Header