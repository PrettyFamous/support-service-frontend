import Input from '../Input'
import { useNavigate } from 'react-router-dom'

import './Registration.scss'

import regSvg from '../../assets/img/reg_picture.svg'
import footerSvg from '../../assets/img/footer_logo.svg'
import logoSvg from '../../assets/img/login_logo.svg'
import mailSvg from '../../assets/img/icon-mail.svg'
import lockSvg from '../../assets/img/icon-lock.svg'

const Registration = () => {
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
            <Input label="full name" text="Type your full name" />
            <Input label="e-mail" text="Type your e-mail" img={mailSvg}/>
            <Input label="password" text="Type your password" img={lockSvg}/>
            <Input label="confirm password" text="Type your password" img={lockSvg}/>
            <button className='login__button' href="#">Register</button>
            <p className='login__reginfo'>
              Have an account?
              <a onClick={() => navigate("/login")}>&nbsp;Sign in.</a>
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
export default Registration;