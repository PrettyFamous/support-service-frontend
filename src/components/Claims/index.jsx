import claimsData from '../../data/claims.js'
import { checkClaimTypeColor } from '../../tools/checkClaimTypeColor'
import { useNavigate } from "react-router-dom";

import './Claims.scss'

import plusSvg from '../../assets/img/icon-plus.svg'
import etcSvg from '../../assets/img/etc.svg'
import lessSvg from '../../assets/img/less.svg'
import greaterSvg from '../../assets/img/greater.svg'

const Claims = () => {
  const navigate = useNavigate();

  return (
    <div className='claims'>
      <div className='claims__header'>
        <h2>Your claims</h2>
        <button className='claims__addButton' onClick={() => navigate("/create")}>
          <img src={plusSvg}/> Create claim
        </button>
      </div>
      <table>
        <thead className='table__header'>
          <tr>
            <th className='table__title'>Title</th>
            <th>Created</th>
            <th>Type</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {claimsData.map((item, index) =>
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.created}</td>
              <td >
                <div className='type__inner'>
                  <div className="type__label" style={checkClaimTypeColor(item.type)} />
                  {item.type}
                </div>
              </td>
              <td>
                <div className={item.status + " status"}>{item.status}</div>
              </td>
              <td>
                <a className="table__link" onClick={() => navigate("/handle")}>Browse</a>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className='pages'>
          <button className='pages__button'><img src={lessSvg}/></button>
          <button className='pages__button'>1</button>
          <img className="pages__etc" src={etcSvg}/>
          <button className='pages__button'>4</button>
          <button className='pages__button active'>5</button>
          <button className='pages__button'>6</button>
          <img className="pages__etc" src={etcSvg}/>
          <button className='pages__button'>50</button>
          <button className='pages__button'><img src={greaterSvg}/></button>
      </div>
    </div>
  )
}
export default Claims