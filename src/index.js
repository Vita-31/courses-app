import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UsersProvider from './context/UsersContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UsersProvider>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </UsersProvider>
);