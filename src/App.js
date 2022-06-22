import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react';
import './index.scss';

import Claims from './components/Claims';
import CreateClaim from './components/CreateClaim';
import HandleClaim from './components/HandleClaim';
import Header from './components/Header';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Registration from './components/Registration'

function App() {
  const [auth, setAuth] = useState(false);
 

  return (
    <BrowserRouter>
    {auth && 
      <>
        <Navbar />
        <Header />
      </>
    }
    <Routes>
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/claims" element={<Claims />} />
      <Route path="/create" element={<CreateClaim />} />
      <Route path="/handle" element={<HandleClaim />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
