import { useNavigate } from "react-router-dom"
import Input from '../Input'

import './HandleClaim.scss'


const HandleClaim = () => {
  const navigate = useNavigate();

  return (
    <div className='handle'>
      <div className='handle__header'>
        <h2>Incoming claim</h2>
      </div>
      <Input label="Title" text="Figma smart web system for to build" disabled/>
      <Input label="Type" text="Hardware" disabled/>
      <Input label="Description" text="Some claim description here" disabled/>
      <div className="handle__buttons">
        <button className='cancel' onClick={() => navigate("/claims")}>Cancel</button>
        <button className='done'>Done</button>
        <button className='decline'>Decline</button>
      </div>
    </div>
  )
}
export default HandleClaim