import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProtectedRoute({children, isAuth, to}) {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if(isAuth === 'yes' && !token) {
        navigate(to || '/login');
    } else if(isAuth === 'no' && token) {
        navigate(to || '/courses');
    }
    // eslint-disable-next-line
  }, [isAuth, token])

  return <>{children}</>
}
