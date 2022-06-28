import { down } from '../../assets/img'

import './Dropdown.scss'

const Dropdown = ({values}) => {
  return (
    <div className="">
      <label htmlFor="types" className='label'>Type</label>
      <select className="input" required>
          <option value="hard">
            Hardware
          </option>
          <option value="soft">Software</option>
          <option value="net">Networking</option>
          <option value="troublesh">Troubleshooting</option>
      </select>
    </div>
  )
}

export default Dropdown