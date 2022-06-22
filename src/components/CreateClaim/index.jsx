import Input from '../Input'
import { useNavigate } from "react-router-dom";

import './CreateClaim.scss'

const CreateClaim = () => {
  let navigate = useNavigate();

  return (
    <div className='handle'>
      <div className='handle__header'>
        <h2>Creating new claim</h2>
      </div>
      <Input label="Title" text="Figma smart web system for to build"/>
      <Input label="Type" text="Select type" />
      <Input label="Description" text="Some claim description here" />
      <div className="handle__buttons">
        <button className='cancel' onClick={() => navigate("/claims")}>Cancel</button>
        <button className='done'>Create</button>
      </div>
    </div>
  )
}

export default CreateClaim