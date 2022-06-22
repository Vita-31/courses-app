import { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Button from './common/Button/Button';
import SearchBar from './components/Courses/components/SearchBar/SearchBar';
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
              <div className="actions">
                <SearchBar setSearchQuery={setSearchQuery}/>
                <NavLink to='/create' className="btn btn-add btn-md">Add new course</NavLink>
                {/* <Button to="/create" bg="add" width="md"></Button> */}
              </div>
              <div className="page__courses">
                <Courses searchQuery={searchQuery}/>
              </div>
            </>
          }/>
        </Routes>
      </div>
    </>
  )
}

export default App;
