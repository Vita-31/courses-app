import './Button.css'

function Button({buttonText, type, ...props}) {
  return (
    <button {...props} className="btn" type={type || ''}>{buttonText}</button>
  )
}

export default Button