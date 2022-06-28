import ClaimsMobile from './ClaimsMobile.jsx'
import ClaimsDesctop from './ClaimsDesctop.jsx'

import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

import './Claims.scss'

const serverUrl = 'http://localhost:3001' 

const Claims = () => { 
  const token = JSON.parse(localStorage.getItem("userInfo")).data.token 
  const [claims, setClaims] = useState([])
  
  useEffect(() => {
    axios.get(
      `${serverUrl}/claim`, 
      { headers: {"Authorization": `Bearer ${token}`} }
      )
    .then((response) => {
      const items = response.data.claims.map((item) => ({
                      ...item,
                      createdAt: parseDate(item.createdAt)
                    }))
      setClaims(items)
      console.log(items)
  })
  }, [])

  const parseDate = (date) => 
    date[8] + date[9] + "/" + date[5] + date[6] + "/" + date[0] + date[1] + date[2] + date[3];

  

  return (
    <>
      {window.innerWidth < 800
          ? <ClaimsMobile claimsList={claims}/>
          : <ClaimsDesctop claimsList={claims}/>
      }
    </>
  )
}
export default Claims