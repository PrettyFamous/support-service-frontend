import { useNavigate } from "react-router-dom";

import './Navbar.scss'

import logoSvg from '../../assets/img/nav_logo.svg'
import homeSvg from '../../assets/img/icon-home.svg'
import globeSvg from '../../assets/img/icon-globe.svg'
import archiveSvg from '../../assets/img/icon-archive.svg'
import pieSvg from '../../assets/img/icon-pie-chart.svg'
import dollarSvg from '../../assets/img/icon-dollar-sign.svg'
import databaseSvg from '../../assets/img/icon-database.svg'
import arrowSvg from '../../assets/img/icon-navigation.svg'

const Navbar = () => {
  let navigate = useNavigate();

  return (
    <nav className="navigation">
          <a className="navigation__link" onClick={() => navigate("/claims")}>
            <img className="navigation__img" src={logoSvg} alt="logo" />
          </a>
        <div className="navigation__buttons">
          <a className="button active" href="#"><img src={homeSvg} /></a>
          <a className="button" href="#"><img src={globeSvg} /></a>
          <a className="button" href="#"><img src={archiveSvg} /></a>
          <a className="button" href="#"><img src={pieSvg} /></a>
          <a className="button" href="#"><img src={dollarSvg} /></a>
          <a className="button" href="#"><img src={databaseSvg} /></a>
          <a className="button" href="#"><img src={arrowSvg} /></a>
        </div>
      </nav>
  )
}
export default Navbar