import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { sendPost } from '../../services';
import { getUser } from '../../store/user/actionCreators';

export default function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState(null);

    function sendLogin(e) {
        e.preventDefault();
       const email =  e.target.email.value.trim();
       const password = e.target.password.value.trim();

       const user = {
        email,
        password
       }

       sendPost("http://localhost:3001/login", user)
        .then(res => {
            dispatch(getUser(res.user))
            localStorage.setItem('token', res.accessToken);
            localStorage.setItem('userId', res.user.id);

            if(res.accessToken) {
                navigate('/courses');
            }
        })
        .catch(err => {
            setError(err.message);
        })
    }

  return (
    <div className='auth'>
        <div className="auth__content">
            <h2 className="auth__title">Login</h2>
            <form className='auth__form form' onSubmit={sendLogin}>
                <Input labelText="Email" placeholderText="Enter email" type="email" name="email"/>
                <Input labelText="Password" placeholderText="Enter password" type="password" name="password"/>
                {error && <span className='error'>{error}</span>}
                <div className="form__btn">
                    <Button type="submit" buttonText="Login"/>
                </div>
            </form>
            <p className="auth-message">
                If you not have an account you can 
                <NavLink to="/registration" className="auth-message__link">Registration</NavLink> 
            </p>
        </div>
    </div>
  )
}
