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

function App() {

  const [searchQuery, setSearchQuery] = useState('');
  const [loggedUser, selLoggedUser] = useState('')

  return (
    <BrowserRouter>
      <Header loggedUser={loggedUser}></Header>
      <div className="page container">
        <Routes>
          <Route path='/courses/add' element={<CreateCourse/>}/>
          <Route path='/courses' element={
            <>
              <div className="page__courses">
                <Courses searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
              </div>
            </>
          }/>
          <Route path='/login' element={<Login selLoggedUser={selLoggedUser} />}/>
          <Route path='/registration' element={<Registration/>}/>
          <Route path='/courses/:courseId' element={<CourseInfo/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
