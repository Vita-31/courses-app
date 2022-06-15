import './Header.css'
import Logo from './components/Logo/Logo'
import Button from '../../common/Button/Button'

function Header() {
  return (
    <header className='header'>
        <div className="container">
          <div className="headerContainer">
            <Logo/>
            <div className="headerActions">
              <a href="#" className="headerProfile">Vita</a>
              <Button border='border' bg='green' width="md">Logout</Button>
            </div>
          </div>
        </div>
    </header>
  )
}

export default Header