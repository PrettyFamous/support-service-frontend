import { reg, footer, login_logo, mail, lock } from '../../assets/img'
import { useNavigate } from 'react-router-dom'
import Input from '../Input'

import './Registration.scss'

const Registration = () => {
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
            <Input label="full name" text="Type your full name" />
            <Input label="e-mail" text="Type your e-mail" img={mail} alt="mail"/>
            <Input label="password" text="Type your password" img={lock} alt="psw"/>
            <Input label="confirm password" text="Type your password" img={lock} alt="psw"/>
            <button className="login__button" >Register</button>
            <p className="login__reginfo">
              Have an account?&nbsp;
              <span onClick={() => navigate("/login")}>Sign in.</span>
            </p>
          </form>
        </div>
      </div>
      <footer className="footer">
        <img className="footer__image" src={footer} alt="logo" />
      </footer>
    </>
  )
}
export default Registration;