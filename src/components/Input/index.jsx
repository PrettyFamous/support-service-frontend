import './Input.scss'

const Input = ({label, text, img, disabled, alt, onChange, errorMessage}) => {
  return (
    <label className='container'>
      <p className='label'>{label}</p>
      <input className="input" type='text' placeholder={text}  disabled={disabled} onChange={onChange}/>
      {img && <img className='image' src={img} alt={alt}/>}
      <p className='invisible error__message'>{errorMessage}</p>
    </label>
  )
}
export default Input;