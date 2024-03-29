import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import Button from '../../common/Button/Button'
import Input from '../../common/Input/Input'
import { sendPost } from '../../services';

export default function Registration() {
    const navigate = useNavigate();

    const [error, setError] = useState(null);

    function sendRegistration(e) {
        e.preventDefault();
       const name = e.target.name.value.trim();
       const email =  e.target.email.value.trim();
       const password = e.target.password.value.trim();

       const newUser = {
        name,
        email,
        password
       }

        sendPost("http://localhost:3001/register", newUser)
            .then(res => {
                const token = res.accessToken;
                if(token) {
                    navigate('/login')
                }
            })
            .catch(err => {
                setError(err.message)
            })
    }

  return (
    <div className='auth'>
        <div className="auth__content">
            <h2 className="auth__title">Registration</h2>
            <form className='auth__form form' onSubmit={sendRegistration}>
                <Input labelText="Name" placeholderText="Enter name" type="name" name="name"/>
                <Input labelText="Email" placeholderText="Enter email" type="email" name="email"/>
                <Input labelText="Password" placeholderText="Enter password" type="password" name="password"/>
                {error && <span className='error'>{error}</span>}
                <div className="form__btn">
                    <Button type="submit" buttonText="Registration"/>
                </div>
            </form>
            <p className="auth-message">
                If you have an account you can 
                <NavLink to="/login" className="auth-message__link">Login</NavLink> 
            </p>
        </div>
    </div>
  )
}
