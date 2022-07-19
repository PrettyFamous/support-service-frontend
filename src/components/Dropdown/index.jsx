import { down } from '../../assets/img'

import './Dropdown.scss'

const Dropdown = ({onChange, disabled}) => {
  return (
    <div className="">
      <label className='label'>Type</label>
      <select className="input" onChange={onChange} required  disabled={disabled}>
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