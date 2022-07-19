import { checkClaimTypeColor, checkClaimStatusColor } from '../../tools/tools.js'
import { useNavigate } from "react-router-dom"

const Claim = ({item}) => {
  const navigate = useNavigate();

  return (
    <div className="claims__block">
      <div className="block__header">
        {item?.title || "Unnamed"}
      </div>
      <div className="block__body">
        <div className="block__created">
          <span>Created</span> {item?.createdAt || "Unknown"}
        </div>
        <div className="block__type">
          <span>Type</span> 
          <div className='type__inner'>
            <div className="type__label" style={checkClaimTypeColor(item?.type?.name)} />
            {item?.type?.name || "Unknown"}
          </div>
        </div>
        <div className="block__status">
          <span>Status</span> 
          <div className={"status"} style={checkClaimStatusColor(item?.status?.name)}>{item?.status?.name || "Unknown"}</div>
        </div>
        <button className="block__button" onClick={() => navigate(`/handle?${item._id}`)}>Browse</button>
      </div>
    </div>
  )
}

export default Claim