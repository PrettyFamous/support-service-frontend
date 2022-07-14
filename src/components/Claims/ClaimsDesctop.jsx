import { greater, less, etc, plus } from '../../assets/img/index.js'
import { checkClaimTypeColor, checkClaimStatusColor, parseDate } from '../../tools/tools.js'
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

import axios from 'axios'

import './Claims.scss'

const serverUrl = 'http://localhost:3001' 

const ClaimsDesctop = () => {
  const navigate = useNavigate();
  const [claims, setClaims] = useState([])
  const token = JSON.parse(localStorage.getItem("userInfo")).data.token
  const [offset, setOffset] = useState(0) 
  const [totalItems, setTotalItems] = useState()


  useEffect(() => {
    axios.get(`${serverUrl}/claim?offset=${offset}&limit=10`, { 
      headers: {"Authorization": `Bearer ${token}`} 
    })
    .then((response) => {
      const items = response.data.claims.map((item) => ({
                      ...item,
                      createdAt: parseDate(item.createdAt)
                    }))
      setClaims(items)
      setTotalItems(response.data.totalItems)
    })
  }, [offset]) 

  const incOffset = () => {
    if ((offset + 10) < totalItems) {
      setOffset(offset + 10)
    }
  }

  const decOffset = () => {
    if ((offset - 10) >= 0 ) {
      setOffset(offset - 10)
    }
  }

  const setActivePage = () => {
    //console.log("Current page: " + (offset/10 + 1))
    //console.log("total pages: " + Math.ceil(totalItems/10).toString())
    let buttons = document.querySelectorAll('.pages__button')

    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].innerText != (offset/10 + 1)) {
        buttons[i].classList.remove('active')
      } else {
        buttons[i].classList.add('active')
      }
    }
  }

  setActivePage()

  return (
    <>
      <div className='claims'>
        <div className='claims__header'>
          <h2>Your claims</h2>
          <button className='claims__addButton' onClick={() => navigate("/create")}>
            <img src={plus} alt=""/> Create claim
          </button>
        </div>
        <table>
          <thead className='table__header'>
            <tr>
              <th className='table__title' width="25%">Title</th>
              <th width="18%">Created</th>
              <th width="18%">Type</th>
              <th width="18%">Status</th>
              <th width="15%">Actions</th>
            </tr>
          </thead>
          <tbody>
            {claims.map((item) =>
              <tr key={item._id}>
                <td>{item?.title || 'Unnamed'}</td>
                <td>{item?.createdAt || 'Unknown'}</td>
                <td >
                  <div className='type__inner'>
                    <div className="type__label" style={checkClaimTypeColor(item?.type?.name)} />
                      {item?.type?.name || 'Unknown'}
                  </div>
                </td>
                <td>
                  <div className="status" style={checkClaimStatusColor(item?.status?.name)}>
                    {item?.status?.name || 'Unknown'}
                  </div>
                </td>
                <td>
                  <a className="table__link" onClick={() => navigate(`/handle?${item._id}`)}>Browse</a>
                </td>
              </tr>
            )}
          </tbody>
        </table>


        <div className='pages'>
            <button className='pages__button' onClick={decOffset}><img src={less}/></button>
            <button className='pages__button active' onClick={() => setOffset(0)}>1</button>
            {totalItems > 50 && offset/10 >= 5 && 
              <img className="pages__etc" src={etc} alt="..."  onClick={() => console.log(this)}/>
            }
            {totalItems > 10 &&  // 1-я кнопка
              <button className='pages__button' onClick={e => setOffset((e.target.innerText-1)*10)}>
                {offset/10 >= 5 && offset/10 <= Math.floor(totalItems/10)-5
                  ? offset/10 - 1 
                  : offset/10 <= 5 ? 2 : Math.floor(totalItems/10)-4}
              </button>
            }
            {totalItems > 20 && // 2-я кнопка
              <button className='pages__button' onClick={e => setOffset((e.target.innerText-1)*10)}>
                {offset/10 >= 5 && offset/10 <= Math.floor(totalItems/10)-5
                  ? offset/10
                  : offset/10 <= 5 ? 3 : Math.floor(totalItems/10)-3}
              </button>
            }
            {totalItems > 30 && // 3-я кнопка
              <button className='pages__button' onClick={e => setOffset((e.target.innerText-1)*10)}>
                {offset/10 >= 5 && offset/10 <= Math.floor(totalItems/10)-5
                  ? offset/10 + 1
                  : offset/10 <= 5 ? 4 : Math.floor(totalItems/10)-2}
              </button>
            }
            {totalItems > 40 && // 4-я кнопка
              <button className='pages__button' onClick={e => setOffset((e.target.innerText-1)*10)}>
                {offset/10 >= 5 && offset/10 <= Math.floor(totalItems/10)-5
                  ? offset/10 + 2
                  : offset/10 <= 5 ? 5 : Math.floor(totalItems/10)-1}
              </button>
            }
            {totalItems > 50 && // 5-я кнопка
              <button className='pages__button' onClick={e => setOffset((e.target.innerText-1)*10)}>
                {offset/10 >= 5 && offset/10 <= Math.floor(totalItems/10)-5
                  ? offset/10 + 3
                  : offset/10 <= 5 ? 6 : Math.floor(totalItems/10)}
              </button>
            }
            {totalItems > 60 && offset/10 <= Math.floor(totalItems/10)-5 && 
              <img className="pages__etc" src={etc} alt="..."/>
            }
            {totalItems > 50 &&
              <button className='pages__button' onClick={() => setOffset(totalItems % 10== 0 ? Math.floor(totalItems/10 -1) * 10 : Math.floor(totalItems/10) * 10) }>
                {Math.ceil(totalItems/10).toString()}
              </button>
            }
            <button className='pages__button ' onClick={incOffset}><img src={greater}/></button>
        </div>
      </div>
    </>
  )
}

export default ClaimsDesctop