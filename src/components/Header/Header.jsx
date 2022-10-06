import './Header.css';
import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getData } from '../../services';
import { useDispatch, useSelector } from 'react-redux';
import { userSelectors } from '../../store/user/selectors';
import { getUser, getUserToken, isAuthUser, setLogoutUser } from '../../store/user/actionCreators';

function Header() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(userSelectors);
  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');

  useEffect(() => {
    getData(`http://localhost:3001/users/${userId}`)
      .then(res => {
        dispatch(getUser(res))
      })
  }, [])

  useEffect(() => {
    if(token) {
      dispatch(getUserToken(token))
      dispatch(isAuthUser())
    }
  }, [token])

  function setLoginPage() {
    navigate('/login');
  }

  function setLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    dispatch(setLogoutUser())
    navigate('/login');
  }

  return (
    <header className='header'>
        <div className="container headerContainer">
          <Logo/>
          <div className="headerActions">
            {token && <p className="headerProfile">{user?.name}</p>}
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