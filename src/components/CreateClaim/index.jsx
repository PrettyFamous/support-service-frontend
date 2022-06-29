import Input from '../Input'
import { useNavigate } from "react-router-dom";
import Dropdown from '../Dropdown';
import { useState } from 'react';
import axios from 'axios'

const serverUrl = 'http://localhost:3001' 

const CreateClaim = () => {
  const token = JSON.parse(localStorage.getItem("userInfo")).data.token 
  const navigate = useNavigate();
  const [title, setTitle] = useState()
  const [type, setType] = useState("hard")
  const [description, setDescription] = useState('')

  const handleSubmit = () => {
    if (!title) {
      titleError()
    } else {
      const claim = {
        title: title,
        description: description,
        type: type,
        status: "new"
      }
      
      console.log(token)
      axios({
        method: "post",
        url: `${serverUrl}/claim`,
        data: claim,
        headers: {"Authorization": `Bearer ${token}`} 
      })
      .then(() => {
        navigate('/claims')
      })
      .catch(() => {
        alert("Something went wrong :(")
      })
    }
  }

  const titleError = () => {
    document.querySelectorAll('input')[0].classList.add("error")
    document.querySelector('.invisible').classList.remove("invisible")
  }

  return (
    <div className='handle'>
      <div className='handle__header'>
        <h2>Creating new claim</h2>
      </div>
      <Input label="Title" text="Write your title" onChange={e => setTitle(e.target.value)} errorMessage="This field can't be empty"/>
      <Dropdown  onChange={e => setType(e.target.value)} />
      <Input label="Description" text="Some claim description here"  onChange={e => setDescription(e.target.value)} />
      <div className="handle__buttons">
        <button className='cancel' onClick={() => navigate("/claims")}>Cancel</button>
        <button className='done' onClick={handleSubmit}>Create</button>
      </div>
    </div>
  )
}

export default CreateClaim