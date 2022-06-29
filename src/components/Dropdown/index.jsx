import { down } from '../../assets/img'

import './Dropdown.scss'

const Dropdown = ({onChange}) => {
  return (
    <div className="">
      <label htmlFor="types" className='label'>Type</label>
      <select className="input" onChange={onChange} required >
          <option value="hard">
            Hardware
          </option>
          <option value="soft">Software</option>
          <option value="net">Networking</option>
          <option value="troublesh">Troubleshooting</option>
      </select>
      <img className='image' src={down} />
    </div>
  )
}

export default Dropdown