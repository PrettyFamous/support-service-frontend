import ClaimsMobile from './ClaimsMobile.jsx'
import ClaimsDesctop from './ClaimsDesctop.jsx'

import './Claims.scss'

const Claims = () => {  
  return (
    <>
      {window.innerWidth < 800
        ? <ClaimsMobile />
        : <ClaimsDesctop />
      }
    </>
  )
}
export default Claims