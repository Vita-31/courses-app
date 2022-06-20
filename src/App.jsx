import './App.css';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';

function App() {

  return (
    <>
      <Header></Header>
      <div className="page container">
        <Courses/>
      </div>
    </>
  )
}

export default App;
