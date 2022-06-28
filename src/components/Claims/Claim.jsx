import { checkClaimTypeColor } from '../../tools/checkClaimTypeColor'
import { useNavigate } from "react-router-dom"
import { checkClaimStatusColor } from '../../tools/checkClaimStatusColor.js'

const Claim = ({item}) => {
  const navigate = useNavigate();

  return (
    <div className="claims__block">
      <div className="block__header">
        {item.title}
      </div>
      <div className="block__body">
        <div className="block__created">
          <span>Created</span> {item.createdAt}
        </div>
        <div className="block__type">
          <span>Type</span> 
          <div className='type__inner'>
            <div className="type__label" style={checkClaimTypeColor(item.type.name)} />
            {item.type.name}
          </div>
        </div>
        <div className="block__status">
          <span>Status</span> 
          <div className={"status"} style={checkClaimStatusColor(item.status.name)}>{item.status.name}</div>
        </div>
        <button className="block__button" onClick={() => navigate("/handle")}>Browse</button>
      </div>
    </div>
  )
}

export default Claim