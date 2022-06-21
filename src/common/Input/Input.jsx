import React from './Input.css'

function Input({type, placeholder, ...props}) {
  return (
    <input className='input' type={type} placeholder={placeholder} {...props}/>
  )
}

export default Input