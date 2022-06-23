import { useNavigate } from "react-router-dom"

import claimsData from '../../data/claims.js'
import './Claims.scss'
import Claim from './Claim.jsx'


const ClaimsMobile = () => {
  const navigate = useNavigate();

  return (
    <div className='claims'>
      <div className='claims__header'>
        <h2>Your claims</h2>
        <button className='claims__addButton' onClick={() => navigate("/create")}>+</button>
      </div>
      <div className='claims__container'>
        {claimsData.map((item, index) => <Claim item={item} key={index} />)}
      </div>
    </div>
  )
}
export default ClaimsMobile