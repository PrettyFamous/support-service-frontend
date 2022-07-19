import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import './index.scss';

import Claims from './components/Claims';
import CreateClaim from './components/CreateClaim';
import HandleClaim from './components/HandleClaim';
import Header from './components/Header';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Registration from './components/Registration'

function App() {
  const [logged, setLogged] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    setInterval(() => {
      const local = localStorage.getItem('userInfo')
      if (local) {
        setLogged(local)
      }
    }, 1000)
  }, [])

  return (
    <BrowserRouter>
    {logged && 
      <>
        <Navbar />
        <Header setLogged={setLogged} setSearch={setSearch}/>
      </>
    }
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/registration" element={<Registration setLogged={setLogged}/>} />
      <Route path="/login" element={<Login setLogged={setLogged}/>} />
      <Route path="/claims" element={<Claims search={search}/>} />
      <Route path="/create" element={<CreateClaim />} />
      <Route path="/handle" element={<HandleClaim />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
