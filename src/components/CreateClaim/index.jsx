import Input from '../Input'
import { useNavigate } from "react-router-dom";
import Dropdown from '../Dropdown';


const CreateClaim = () => {
  const navigate = useNavigate();

  return (
    <div className='handle'>
      <div className='handle__header'>
        <h2>Creating new claim</h2>
      </div>
      <Input label="Title" text="Write your title"/>
      <Dropdown />
      <Input label="Description" text="Some claim description here" />
      <div className="handle__buttons">
        <button className='cancel' onClick={() => navigate("/claims")}>Cancel</button>
        <button className='done'>Create</button>
      </div>
    </div>
  )
}

export default CreateClaim