import './Header.css';
import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import { useNavigate } from 'react-router-dom';
import useUsers from '../../hooks/UseUsers';

function Header() {

  const { token } = useUsers();

  const navigate = useNavigate();

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
            {token && <p className="headerProfile"></p>}

            {token
            ? <Button buttonText="Logout" onClick={setLogout}/>
            : <Button buttonText="Login" onClick={setLoginPage}/> 
            }
          </div>
        </div>
    </header>
  )
}

export default Header