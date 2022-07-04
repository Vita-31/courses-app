import './Header.css'
import Logo from './components/Logo/Logo'
import Button from '../../common/Button/Button'

function Header() {
  return (
    <header className='header'>
        <div className="container headerContainer">
          <Logo/>
          <div className="headerActions">
            <p className="headerProfile">Vita</p>
            <Button buttonText="Login"/>
          </div>
        </div>
    </header>
  )
}

export default Header