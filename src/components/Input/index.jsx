import './Input.scss'

const Input = ({label, text, img, disabled, alt, onChange}) => {
  return (
    <label className='container'>
      <p className='label'>{label}</p>
      <input className="input" type='text' placeholder={text}  disabled={disabled} onChange={onChange}/>
      {img && <img className='image' src={img} alt={alt}/>}
    </label>
  )
}
export default Input;