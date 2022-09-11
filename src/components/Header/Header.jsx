import './Header.css'
import Logo from './components/Logo/Logo'
import Button from '../../common/Button/Button'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

function Header({ loggedUser }) {
  const [auth, setAuth] = useState(null);

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    setAuth(token);
  }, [token])

  function setLoginPage() {
    navigate('/login');
  }

  function setLogout() {
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <header className='header'>
        <div className="container headerContainer">
          <Logo/>
          <div className="headerActions">
            {auth && <p className="headerProfile">{loggedUser.name}</p>}

            {auth
            ? <Button buttonText="Logout" onClick={setLogout}/>
            : <Button buttonText="Login" onClick={setLoginPage}/> 
            }
          </div>
        </div>
    </header>
  )
}

export default Header