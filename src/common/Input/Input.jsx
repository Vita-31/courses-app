import React from './Input.css'

function Input({type, placeholder, name, ...props}) {
  return (
    <input className='input' name={name} type={type} placeholder={placeholder} {...props}/>
  )
}

export default Input