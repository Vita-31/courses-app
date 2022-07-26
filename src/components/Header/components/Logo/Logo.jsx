import './Logo.css'
import LogoImg from './logo.png'

function Logo() {
  return (
    <img src={LogoImg} className="logo" alt="Logo" width="1" height="1"/>
  )
}

export default Logo