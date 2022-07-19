import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { down } from  '../../assets/img'
import { useNavigate, useLocation } from "react-router-dom"
import Input from '../Input'

import './HandleClaim.scss'

const serverUrl = 'http://localhost:3001'

const HandleClaim = () => {
  const token = JSON.parse(localStorage.getItem("userInfo")).data.token 
  const role = JSON.parse(localStorage.getItem("userInfo")).data.role.slug
  const location = useLocation();
  const navigate = useNavigate();
  const claimId = location.search.substring(1);
  const [title, setTitle] = useState('')
  const [typeName, setTypeName] = useState('')
  const [typeSlug, setTypeSlug] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    axios.get(`${serverUrl}/claim/${claimId}`, { 
      headers: {"Authorization": `Bearer ${token}`} 
    })
    .then((response) => {
      //console.log(response)
      setTitle(response.data.title)
      setTypeName(response.data.type.name)
      setDescription(response.data.description)
      setTypeSlug(response.data.type.slug)
    })
    .catch(() => {
      alert('Something went wrong :(')
    })
  }, [])
  

  const handleDone = () => {
    const claim = {
      title: title,
      description: description,
      type: typeSlug,
      status: 'done'
    }

    axios({
      method: "put",
      url: `${serverUrl}/claim/${claimId}`,
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

  const handleDecline = () => {
    const claim = {
      title: title,
      description: description,
      type: typeSlug,
      status: 'decl'
    }

    axios({
      method: "put",
      url: `${serverUrl}/claim/${claimId}`,
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


  return (
    <div className='handle'>
      <div className='handle__header'>
        <h2>Incoming claim</h2>
      </div>
      <Input label="Title" text={title} disabled/>
      <Input label="Type" text={typeName} img={down} disabled />
      <Input label="Description" text={description} disabled/>

      <div className="handle__buttons">
        <button className='cancel' onClick={() => navigate("/claims")}>Cancel</button>
        {role === 'admin' &&
        <>
          <button className='done' onClick={handleDone}>Done</button>
          <button className='decline' onClick={handleDecline}>Decline</button>
        </>
        }
      </div>
    </div>
  )
}
export default HandleClaim