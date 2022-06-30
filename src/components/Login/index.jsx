import { reg, footer, login_logo, mail, lock } from '../../assets/img'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Input from '../Input'
import axios from 'axios'

import './Login.scss'
import { useEffect } from 'react'

const serverUrl = 'http://localhost:3001' 

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    if (localStorage.getItem('userInfo')) {
      navigate('/claims')
    }
  }, [])
  


  const handleLogin = (e) => {
    if (email && password)
    {
      let credentials = {
        email: email,
        password: password
      }

      axios.post(`${serverUrl}/auth/login`, credentials)
      .then((response) => {
        localStorage.setItem("userInfo", JSON.stringify(response))
        console.log(response)
        console.log(localStorage.getItem('userInfo'))
        navigate("/claims")
      })
      .catch((response) => {
        console.log(response)
        loginError()
      })
    }

    e.preventDefault();
  }

  const loginError = () => {
    document.querySelectorAll('input')[0].classList.add("error")
    document.querySelectorAll('input')[1].classList.add("error")
    document.querySelector('.invisible').classList.remove("invisible")
  }

  return (
    <>
      <div className="main__frame">
        <div className="picture">
          <img className="picture__image" src={reg} alt="girl" />
        </div>
        <div className="login">
          <img className="login__logo" src={login_logo} alt="logo" />
          <form className="login__form">
            <Input label="e-mail" text="Type your e-mail" img={mail} onChange={e => setEmail(e.target.value)} errorMessage="Wrong email or password"/>
            <Input label="password" text="Type your password" img={lock} onChange={e => setPassword(e.target.value)}/>
            <div className="login__check">
              <input type="checkbox" className='custom-checkbox' id="remember-me"></input>
              <label htmlFor="remember-me" className='check__text'>Keep me logged in</label>
            </div>
            <button className='login__button' onClick={e => handleLogin(e)}>Login</button>
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