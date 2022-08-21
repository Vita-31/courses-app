import './Input.css'

function Input({type, placeholderText, name, labelText, ...props}) {
  return (
    <label className='field'>
      {labelText && <span className='field__title'>{labelText}</span>}
      <input 
        className='input' 
        name={name} 
        type={type || 'text'} 
        placeholder={placeholderText} 
        {...props}
      />
    </label>

  )
}

export default Input