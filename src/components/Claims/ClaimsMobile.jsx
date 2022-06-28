import { useNavigate } from "react-router-dom"

import claimsData from '../../data/claims.js'
import './Claims.scss'
import Claim from './Claim.jsx'

const ClaimsMobile = ({claimsList}) => {
  const navigate = useNavigate();

  return (
    <div className='claims'>
      <div className='claims__header'>
        <h2>Your claims</h2>
        <button className='claims__addButton' onClick={() => navigate("/create")}>+</button>
      </div>
      <div className='claims__container'>
        {claimsList.map((item) => <Claim item={item} key={item._id} />)}
      </div>
    </div>
  )
}
export default ClaimsMobile