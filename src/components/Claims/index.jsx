import ClaimsMobile from './ClaimsMobile.jsx'
import ClaimsDesctop from './ClaimsDesctop.jsx'

import './Claims.scss'


const Claims = ({search}) => { 
  return (
    <>
      {window.innerWidth < 800
          ? <ClaimsMobile />
          : <ClaimsDesctop search={search}/>
      }
    </>
  )
}
export default Claims