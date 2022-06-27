import { reg, footer, login_logo, mail, lock } from '../../assets/img'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Input from '../Input'

import './Registration.scss'
import axios from 'axios'

const serverUrl = 'http://localhost:3001' 

const Registration = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const comparePassword = (psw, target) => {
    if (psw !== password) {
      target.classList.add("error");
      document.querySelector('.login__button').disabled = true;
    } else {
      target.classList.remove("error");
      document.querySelector('.login__button').disabled = false;
    }
  }

  const emailError = (isError) => {
    console.log();
    if (isError) {
      document.querySelectorAll('input')[1].classList.add("error");
    } else {
      document.querySelectorAll('input')[1].classList.remove("error");
    }
  }

  const handleRegistration = (e) => {
    if (fullName && email && password)
    {
      let credentials = {
        fullName: fullName,
        email: email,
        password: password
      }
      // console.log(credentials)
      axios.post(`${serverUrl}/auth/registration`, credentials)
      .then((response) => {
        localStorage.setItem("userInfo", JSON.stringify(response))
        console.log(response)
        emailError(false)
      })
      .catch((res) => {
        console.log(res)
        if (res.response.status === 409) 
        emailError(true);
      })
    }

    e.preventDefault()
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
            <Input label="full name" text="Type your full name" onChange={e => setFullName(e.target.value)}/>
            <Input label="e-mail" text="Type your e-mail" img={mail} onChange={e => setEmail(e.target.value)}/>
            <Input label="password" text="Type your password" img={lock} onChange={e => setPassword(e.target.value)}/>
            <Input label="confirm password" text="Type your password" img={lock} onChange={e => comparePassword(e.target.value, e.target)}/>
            <button className="login__button" onClick={e => handleRegistration(e)}>Register</button>
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