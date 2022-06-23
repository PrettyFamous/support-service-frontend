import { checkClaimTypeColor } from '../../tools/checkClaimTypeColor'
import { useNavigate } from "react-router-dom"

const Claim = ({item}) => {
  const navigate = useNavigate();

  return (
    <div className="claims__block">
      <div className="block__header">
        {item.title}
      </div>
      <div className="block__body">
        <div className="block__created">
          <span>Created</span> {item.created}
        </div>
        <div className="block__type">
          <span>Type</span> 
          <div className='type__inner'>
            <div className="type__label" style={checkClaimTypeColor(item.type)} />
            {item.type}
          </div>
        </div>
        <div className="block__status">
          <span>Status</span> 
          <div className={item.status + " status"}>{item.status}</div>
        </div>
        <button className="block__button" onClick={() => navigate("/handle")}>Browse</button>
      </div>
    </div>
  )
}

export default Claim