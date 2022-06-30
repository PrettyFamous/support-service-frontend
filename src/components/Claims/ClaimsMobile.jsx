import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { parseDate } from "../../tools/tools.js";

import Claim from './Claim.jsx'
import axios from 'axios'

import './Claims.scss'

const serverUrl = 'http://localhost:3001' 

const ClaimsMobile = () => {
  const navigate = useNavigate();
  const [claims, setClaims] = useState([])
  const token = JSON.parse(localStorage.getItem("userInfo")).data.token 

  useEffect(() => {
    axios.get(`${serverUrl}/claim`, { 
      headers: {"Authorization": `Bearer ${token}`} 
    })
    .then((response) => {
      const items = response.data.claims.map((item) => ({
                      ...item,
                      createdAt: parseDate(item.createdAt)
                    }))
      setClaims(items)
    })
  }, []) 


  return (
    <div className='claims'>
      <div className='claims__header'>
        <h2>Your claims</h2>
        <button className='claims__addButton' onClick={() => navigate("/create")}>+</button>
      </div>
      <div className='claims__container'>
        {claims && claims.map((item) => <Claim item={item} key={item._id} />)}
      </div>
    </div>
  )
}
export default ClaimsMobile