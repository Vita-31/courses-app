import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Header from './components/Header/Header';
import Registration from './components/Registration/Registration'
import Login from './components/Login/Login'
import CourseInfo from './components/CourseInfo/CourseInfo'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {

  const [searchQuery, setSearchQuery] = useState('');
  const [loggedUser, selLoggedUser] = useState('')

  return (
    <BrowserRouter>
      <Header loggedUser={loggedUser}></Header>
      <div className="page container">
        <Routes>
          <Route path='/courses/add' element={
            <ProtectedRoute isAuth='yes'>
              <CreateCourse/>
            </ProtectedRoute>
          }/>
          <Route path='/courses' element={
            <ProtectedRoute isAuth="yes">
              <div className="page__courses">
                <Courses searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
              </div>
            </ProtectedRoute>
          }/>
          <Route path='/login' element={
            <ProtectedRoute isAuth='no'>
              <Login selLoggedUser={selLoggedUser} />
            </ProtectedRoute>
          }/>
          <Route path='/registration' element={
            <ProtectedRoute isAuth="no">
              <Registration/>
            </ProtectedRoute>
          }/>
          <Route path='/courses/:courseId' element={
            <ProtectedRoute isAuth='yes'>
              <CourseInfo/>
            </ProtectedRoute>
          }/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
