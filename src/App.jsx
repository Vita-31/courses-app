import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Header from './components/Header/Header';

function App() {

  const [searchQuery, setSearchQuery] = useState('')

  return (
    <>
      <Header></Header> 
      <div className="page container">
        <Routes>
          <Route path='/create' element={<CreateCourse/>}/>
          <Route path='/' element={
            <>
              <div className="page__courses">
                <Courses searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
              </div>
            </>
          }/>
        </Routes>
      </div>
    </>
  )
}

export default App;
