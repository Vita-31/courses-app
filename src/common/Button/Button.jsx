import './Button.css'

function Button({children, border, bg, width, ...props}) {
  console.log(bg)
  const borderClass = border ? `btn-${border}` : '';
  const bgClass = bg ? `btn-${bg}` : '';
  const widthClass = width ? `btn-${width}` : ''
  const classes = [borderClass, bgClass, widthClass].filter(Boolean).join(' ')
  return (
    <button {...props} className={`btn ${classes}`}>{children}</button>
  )
}

export default Button