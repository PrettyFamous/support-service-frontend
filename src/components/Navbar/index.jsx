import { nav_logo, home, globe, archive, pie, dollar, database, arrow } from '../../assets/img'
import { useNavigate } from "react-router-dom";

import './Navbar.scss'

const Navbar = () => {
  let navigate = useNavigate();

  return (
    <nav className="navigation">
        <a className="navigation__link" onClick={() => navigate("/claims")}>
          <img className="navigation__img" src={nav_logo} alt="logo" />
        </a>
        <div className="navigation__buttons">
          <a className="button active" href="#"><img src={home} /></a>
          <a className="button" href="#"><img src={globe} /></a>
          <a className="button" href="#"><img src={archive} /></a>
          <a className="button" href="#"><img src={pie} /></a>
          <a className="button" href="#"><img src={dollar} /></a>
          <a className="button" href="#"><img src={database} /></a>
          <a className="button" href="#"><img src={arrow} /></a>
        </div>
      </nav>
  )
}
export default Navbar