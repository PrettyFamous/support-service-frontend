import { reg, footer, login_logo, mail, lock } from '../../assets/img'
import { useNavigate } from 'react-router-dom'
import Input from '../Input'

import './Login.scss'

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="main__frame">
        <div className="picture">
          <img className="picture__image" src={reg} alt="girl" />
        </div>
        <div className="login">
          <img className="login__logo" src={login_logo} alt="logo" />
          <form className="login__form">
            <Input label="e-mail" text="Type your e-mail" img={mail}/>
            <Input label="password" text="Type your password" img={lock}/>
            <div className="login__check">
              <input type="checkbox" className='custom-checkbox' id="remember-me"></input>
              <label htmlFor="remember-me" className='check__text'>Keep me logged in</label>
            </div>
            <button className='login__button' href="#">Login</button>
            <p className='login__reginfo'>
              Not a member?&nbsp;
              <span onClick={() => navigate("/registration")}>Request registration.</span>
            </p>
          </form>
        </div>
      </div>
      <footer className='footer'>
        <img className="footer__image" src={footer} alt='logo' />
      </footer>
    </>
  )
}
export default Login;