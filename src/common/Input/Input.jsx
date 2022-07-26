import './Input.css'

function Input({type, placeholderText, name, ...props}) {
  return (
    <input className='input' name={name} type={type || 'text'} placeholder={placeholderText} {...props}/>
  )
}

export default Input