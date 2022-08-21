import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import Button from '../../common/Button/Button'
import Input from '../../common/Input/Input'

export default function Login({ selLoggedUser }) {

    const [auth, setAuth] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        if(auth) {
            navigate('/courses')
        } else {
            navigate('/login')
        }
    }, [auth])

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
            localStorage.setItem('token', res.accessToken)
            setAuth(res.accessToken)
            selLoggedUser(res.user)
       })
    }

    async function sendPost(url = '', data = {}) {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
            },
        });

        return await response.json();
    }

  return (
    <div className='auth'>
        <div className="auth__content">
            <h2 className="auth__title">Login</h2>
            <form className='auth__form form' onSubmit={sendLogin}>
                <Input labelText="Email" placeholderText="Enter email" type="email" name="email"/>
                <Input labelText="Password" placeholderText="Enter password" type="password" name="password"/>
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
