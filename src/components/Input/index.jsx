import './Input.scss'

const Input = ({label, text, img, disabled}) => {
  return (
    <label className='container'>
      <p className='label'>{label}</p>
      <input className="input" type='text' placeholder={text}  disabled={disabled}></input>
      {img && <img className='image' src={img} alt="search"/>}
    </label>
  )
}
export default Input;