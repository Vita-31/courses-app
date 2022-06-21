import './App.css';
import Button from './common/Button/Button';
import SearchBar from './components/Courses/components/SearchBar/SearchBar';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';

function App() {

  return (
    <>
      <Header></Header>
      <div className="page container">
        <div className="actions">
          <SearchBar/>
          <Button bg="add" width="md">Add new course</Button>
        </div>
        <div className="page__courses">
          <Courses/>
        </div>
      </div>
    </>
  )
}

export default App;
