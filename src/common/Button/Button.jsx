import './Button.css'

function Button({buttonText, type, ...props}) {
  return (
    <button {...props} className="btn" type={type || 'button'}>{buttonText}</button>
  )
}

export default Button