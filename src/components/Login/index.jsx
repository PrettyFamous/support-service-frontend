import Input from '../Input'
import { useNavigate } from 'react-router-dom'

import './Login.scss'

import regSvg from '../../assets/img/reg_picture.svg'
import footerSvg from '../../assets/img/footer_logo.svg'
import logoSvg from '../../assets/img/login_logo.svg'
import mailSvg from '../../assets/img/icon-mail.svg'
import lockSvg from '../../assets/img/icon-lock.svg'

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="main__frame">
        <div className="picture">
          <img className="picture__image" src={regSvg} alt="girl" />
        </div>
        <div className="login">
          <img className="login__logo" src={logoSvg} alt="logo" />
          <form className="login__form">
            <Input label="e-mail" text="Type your e-mail" img={mailSvg}/>
            <Input label="password" text="Type your password" img={lockSvg}/>
            <div className="login__check">
              <input type="checkbox" className='custom-checkbox' id="remember-me"></input>
              <label htmlFor="remember-me" className='check__text'>Keep me logged in</label>
            </div>
            <button className='login__button' href="#">Login</button>
            <p className='login__reginfo'>
              Not a member?
              <a onClick={() => navigate("/registration")}>&nbsp;Request registration.</a>
            </p>
          </form>
        </div>
      </div>
      <footer className='footer'>
        <img className="footer__image" src={footerSvg} alt='logo' />
      </footer>
    </>
  )
}
export default Login;