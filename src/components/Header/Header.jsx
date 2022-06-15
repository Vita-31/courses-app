import './Header.css'
import Logo from './components/Logo/Logo'
import Button from '../../common/Button/Button'

function Header() {
  return (
    <header className='header'>
        <div className="container">
          <div className="headerContainer">
            <Logo/>
            <div className="headerAction">
              <Button border='violet' bg='transparent' width="md">Logout</Button>
            </div>
          </div>
        </div>
    </header>
  )
}

export default Header