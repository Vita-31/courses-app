import { useState } from 'react';
import './App.css';
import Button from './common/Button/Button';
import SearchBar from './components/Courses/components/SearchBar/SearchBar';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';

function App() {

  const [searchQuery, setSearchQuery] = useState('')

  return (
    <>
      <Header></Header>
      <div className="page container">
        <div className="actions">
          <SearchBar setSearchQuery={setSearchQuery}/>
          <Button bg="add" width="md">Add new course</Button>
        </div>
        <div className="page__courses">
          <Courses searchQuery={searchQuery}/>
        </div>
      </div>
    </>
  )
}

export default App;
